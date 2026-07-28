import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      brand: {
        primary: string;
        primaryDark: string;
        primaryLight: string;
      };

      background: {
        primary: string;
        secondary: string;
        tertiary: string;
      };

      surface: {
        primary: string;
        secondary: string;
        elevated: string;
      };

      text: {
        primary: string;
        secondary: string;
        inverse: string;
        disabled: string;
      };

      border: {
        primary: string;
        secondary: string;
        focus: string;
      };

      feedback: {
        success: string;
        warning: string;
        danger: string;
        info: string;
      };

      overlay: {
        light: string;
        dark: string;
      };
    };

    glass: {
      background: string;
      backgroundLight: string;
      backgroundStrong: string;

      border: string;
      borderStrong: string;

      blur: string;
      blurStrong: string;

      shadow: string;
    };

    typography: {
      fontFamily: {
        primary: string;
        secondary: string;
      };
      fontWeight: {
        thin: number;
        extraLight: number;
        light: number;
        regular: number;
        medium: number;
        semiBold: number;
        bold: number;
        extraBold: number;
        black: number;
      };

      fontSize: {
        xs: string; // 12px
        sm: string; // 14pxstring
        base: string; // 16px
        md: string; // 18px
        lg: string; // 20px
        xl: string; // 24px
        '2xl': string; // 32px
        '3xl': string; // 40px
      };
      lineHeight: {
        none: number;
        tight: number;
        snug: number;
        normal: number;
        relaxed: number;
        loose: number;
      };
      letterSpacing: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
      };
    };

    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };

    width: {
      min: string;
      max: string;
    };

    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };

    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    transitions: {
      fast: string;
      base: string;
      slow: string;
    };

    opacity: {
      disabled: number;
      hover: number;
      overlay: number;
    };

    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
  }
}
