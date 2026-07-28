import * as tokens from './tokens';

export const darkTheme = {
  ...tokens,

  colors: {
    ...tokens.colors,
    background: {
      primary: '#121212',
      secondary: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#D8D8D8',
    },
  },
};
