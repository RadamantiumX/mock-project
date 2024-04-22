
const MAX_TITLE_WORDS = 10; 

export const useTruncateTitle = (title:string | undefined) => {
  const words = title?.split(' ');
  if (words !== undefined) {
  if (words?.length > MAX_TITLE_WORDS || words !== undefined) {
    return words?.slice(0, MAX_TITLE_WORDS).join(' ') + '...';
  }
}
  return title;
}
