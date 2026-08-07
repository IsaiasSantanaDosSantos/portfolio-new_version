import * as tokens from './tokens';

export const lightTheme = {
  ...tokens,
  colors: {
    background: {
      primary: '#FFFFFF',
      secondary: '#D8D8D8',
      tertiary: '#FFFFFF', // corrigido de '#ffff' (typo)
    },
    text: {
      primary: '#111111',
      secondary: '#1E1E1E',
      inverse: '#FFFFFF',
      disabled: '#A0A0A0',
    },
    brand: {
      primary: '#F5DF4E',
      primaryDark: '#D4BF3A',
      primaryLight: '#FFF6B3',
    },
    surface: {
      primary: '#FFFFFF',
      secondary: '#F5F5F5',
      elevated: '#FFFFFF',
    },
    border: {
      primary: '#E0E0E0',
      secondary: '#CCCCCC',
      focus: '#F5DF4E',
    },
    feedback: {
      success: '#2DD36F',
      warning: '#FFC409',
      danger: '#EB445A',
      info: '#3DC2FF',
    },
    overlay: {
      light: 'rgba(255,255,255,0.6)',
      dark: 'rgba(0,0,0,0.4)',
    },
  },
};

// glass: {
//   background: '',
//   backgroundLight: '',
//   backgroundStrong: '',
//   border: '',
//   borderStrong: '',
//   blur: '',
//   blurStrong: '',
//   shadow: '',
// },

// typography: {
//   fontFamily: {
//     primary: '',
//     secondary: '',
//   },
//   fontWeight: {
//     thin: '',
//     extraLight: '',
//     light: '',
//     regular: '',
//     medium: '',
//     semiBold: '',
//     bold: '',
//     extraBold: '',
//     black: '',
//   },

//   fontSize: {
//     xs: '', // 12px
//     sm: '', // 14p"",
//     base: '', // 16px
//     md: '', // 18px
//     lg: '', // 20px
//     xl: '', // 24px
//     '2xl': '', // 32px
//     '3xl': '', // 40px
//   },
//   lineHeight: {
//     none: '',
//     tight: '',
//     snug: '',
//     normal: '',
//     relaxed: '',
//     loose: '',
//   },
//   letterSpacing: {
//     tighter: '',
//     tight: '',
//     normal: '',
//     wide: '',
//     wider: '',
//     widest: '',
//   },
// },

// spacing: {
//   xs: '',
//   sm: '',
//   md: '',
//   lg: '',
//   xl: '',
//   '2xl': '',
// },

// width: {
//   min: '',
//   max: '',
// },

// borderRadius: {
//   sm: '',
//   md: '',
//   lg: '',
//   xl: '',
//   full: '',
// },

// shadows: {
//   sm: '',
//   md: '',
//   lg: '',
//   xl: '',
// },

// transitions: {
//   fast: '',
//   base: '',
//   slow: '',
// },

// opacity: {
//   disabled: '',
//   hover: '',
//   overlay: '',
// },

// breakpoints: {
//   xs: '',
//   sm: '',
//   md: '',
//   lg: '',
//   xl: '',
//   '2xl': '',
// },
// };
