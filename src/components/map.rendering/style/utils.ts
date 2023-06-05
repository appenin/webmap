export const getTwStyleFromArray = (style: any[]) => {
  return style.reduce((acc: any, cur: any) => {
    return acc + ' ' + cur;
  }, '');
};
