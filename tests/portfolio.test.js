import test from 'node:test';
import assert from 'node:assert/strict';
import { buildMailto, buildContactDraft, isContactEmail } from '../src/utils/contact.js';
import { publicationLabel, publicationStatus, filterPublications } from '../src/utils/publications.js';
import { RESEARCH_EXPERIENCE, PUBLIC_CONTACT_EMAIL } from '../src/data/portfolioData.js';

test('email drafts preserve special characters without injecting mailto parameters', () => {
  const fields = { name: 'Test & Review', email: 'review@example.org', subject: 'Research & questions? #1', message: 'First line\nSecond line: α + β & cc=someone@example.org' };
  const url = new URL(buildMailto(PUBLIC_CONTACT_EMAIL, fields));
  assert.equal(url.pathname, PUBLIC_CONTACT_EMAIL);
  assert.equal(url.searchParams.get('subject'), fields.subject);
  assert.equal(url.searchParams.get('body'), `${fields.message}\n\nFrom: ${fields.name}\nReply to: ${fields.email}`);
  assert.equal(url.searchParams.has('cc'), false);
  assert.equal(url.hash, '');
});

test('missing or unsafe recipients cannot produce a misleading draft destination', () => {
  for (const value of ['', 'not-an-email', 'a@example.org?bcc=other@example.org', 'a@example.org\n']) {
    assert.equal(isContactEmail(value), false);
    assert.throws(() => buildMailto(value, {}));
  }
});

test('copy fallback contains the complete draft and a useful default subject', () => {
  assert.equal(buildContactDraft({ name: ' Reviewer ', email: 'review@example.org', subject: ' ', message: ' Inquiry ' }), 'Subject: Professional inquiry\n\nInquiry\n\nFrom: Reviewer\nReply to: review@example.org');
});

test('scholarly outputs retain unique record IDs and distinct submission/publication labels', () => {
  const publications = RESEARCH_EXPERIENCE.publications;
  assert.equal(publications.length, 18);
  assert.equal(new Set(publications.map(pub => pub.id)).size, 18);
  for (const pub of publications) {
    assert.ok(pub.title && pub.authors && pub.date && pub.journal);
    if (pub.status === 'Submitted') assert.equal(publicationLabel(pub), 'Journal manuscript');
    if (pub.category === 'journal-abstract' && pub.status.startsWith('Accepted')) assert.equal(publicationStatus(pub), 'Accepted');
    if (pub.category === 'poster') assert.equal(publicationStatus(pub), 'Presentation Pending');
  }
});

test('only published journal articles are labeled as journal articles', () => {
  assert.equal(publicationLabel({ category: 'journal-article', status: 'Published' }), 'Journal article');
  assert.equal(publicationLabel({ category: 'journal-article', status: 'Accepted/In-Press' }), 'Journal manuscript');
  assert.equal(publicationLabel({ category: 'journal-abstract', status: 'Published' }), 'Conference abstract');
});

test('search combines visible terminology, authors, dates and normalized multiword queries', () => {
  const records = RESEARCH_EXPERIENCE.publications;
  assert.equal(filterPublications(records, { query: 'conference abstract published' }).length, 2);
  assert.equal(filterPublications(records, { query: 'systematic-review September' }).length, 1);
  assert.equal(filterPublications(records, { category: 'poster', query: 'November 2026' }).length, 2);
  assert.equal(filterPublications(records, { query: '  ALI  ' }).length, 18);
});

test('status and category filters never promote accepted or submitted outputs to published', () => {
  const records = RESEARCH_EXPERIENCE.publications;
  assert.equal(filterPublications(records, { status: 'published' }).length, 2);
  assert.equal(filterPublications(records, { status: 'accepted' }).length, 11);
  assert.equal(filterPublications(records, { status: 'submitted' }).length, 3);
  assert.equal(filterPublications(records, { status: 'pending' }).length, 2);
  assert.equal(filterPublications(records, { category: 'poster', status: 'published' }).length, 0);
  assert.equal(filterPublications(records, { query: 'no-such-topic' }).length, 0);
});
