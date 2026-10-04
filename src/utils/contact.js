export const isContactEmail = value => /^[^\s@?&#\r\n]+@[^\s@?&#\r\n]+\.[^\s@?&#\r\n]+$/.test(value);

export function buildContactDraft({ name, email, subject, message }) {
  return `Subject: ${subject.trim() || 'Professional inquiry'}\n\n${message.trim()}\n\nFrom: ${name.trim()}\nReply to: ${email.trim()}`;
}

export function buildMailto(recipient, data) {
  if (!isContactEmail(recipient)) throw new Error('A valid public contact email is required.');
  const subject = data.subject.trim() || 'Professional inquiry';
  const body = `${data.message.trim()}\n\nFrom: ${data.name.trim()}\nReply to: ${data.email.trim()}`;
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
