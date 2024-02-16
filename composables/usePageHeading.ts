export const usePageHeading = (pageHeading: string) => {
  const [prefix, ...heading] = pageHeading.split(' ');
  return [prefix, heading.join(' ')];
};
