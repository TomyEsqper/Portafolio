export function initials(label: string): string {
  const skip = /^(de|del|la|el|en|y|—|-)$/i;
  const words = label
    .replace(/[—–-]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 1 && !skip.test(word));

  const picked =
    words.length >= 2
      ? [words[0], words[words.length > 3 ? 2 : 1]]
      : words.slice(0, 2);

  return picked.map((word) => word[0]).join('').toUpperCase().slice(0, 2);
}
