export const usePageHeading = () => {
  const usePrefixedHeading = (pageHeading: string) => {
    const [prefix, ...heading] = pageHeading.split(' ');
    return [prefix, heading.join(' ')];
  };

  const usePostfixHeading = (pageHeading: string) => {
    const wordsArray = pageHeading.split(' ');
    return [wordsArray.slice(0, -1).join(' '), wordsArray.pop()];
  };

  return { usePrefixedHeading, usePostfixHeading };
};
