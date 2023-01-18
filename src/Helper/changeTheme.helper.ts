export const lightToDark = (color: string) => {
  return color === 'light' ? '#eceeee' : '#111111';
};

export const darkToLight = (color: string) => {
  return color === 'light' ? '#111111' : '#eceeee';
};

export const invert = (color: string) => {
  return color === 'light' ? 'none' : 'invert()';
};
