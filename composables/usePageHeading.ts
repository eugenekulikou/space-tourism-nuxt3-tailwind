export const usePageHeading = (string) => {
  const [prefix, ...heading] = string.split(' ');
  return [prefix, heading.join(' ')];
};
