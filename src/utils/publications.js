export function publicationLabel(pub) {
  if (pub.category === 'poster') return 'Poster';
  if (pub.category === 'journal-abstract') return 'Conference abstract';
  return pub.status === 'Published' ? 'Journal article' : 'Journal manuscript';
}
export function publicationStatus(pub) {
  const status = pub.status.replace(' (Most Meaningful)', '');
  // Conference acceptance and journal in-press status are distinct.
  return pub.category === 'journal-abstract' && status === 'Accepted/In-Press' ? 'Accepted' : status;
}
export function badgeClass(pub) {
  if (pub.status === 'Published') return 'badge-published';
  if (pub.status.startsWith('Accepted')) return 'badge-accepted';
  return 'badge-submitted';
}

// Search the same labels visitors read, including status, date, and output type.
const normalize = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[\s\u2010-\u2015-]+/g, ' ').trim();
export function filterPublications(publications, { category = 'all', status = 'all', query = '' } = {}) {
  const terms = normalize(query).split(' ').filter(Boolean);
  return publications.filter(pub => {
    const matchesStatus = status === 'all' ||
      (status === 'published' && pub.status === 'Published') ||
      (status === 'accepted' && pub.status.startsWith('Accepted')) ||
      (status === 'submitted' && pub.status === 'Submitted') ||
      (status === 'pending' && pub.status === 'Presentation Pending');
    const text = normalize([pub.title, pub.journal, pub.authors, pub.date, publicationLabel(pub), publicationStatus(pub)].join(' '));
    return (category === 'all' || pub.category === category) && matchesStatus && terms.every(term => text.includes(term));
  });
}
