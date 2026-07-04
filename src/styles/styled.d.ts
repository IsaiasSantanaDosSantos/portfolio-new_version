import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryYellow: string;
      primaryBlack: string;
      primaryWhite: string;

      yellowDark: string;
      yellowLight: string;
      yellowGlow: string;

      grayDarker: string;
      grayDark: string;
      grayMedium: string;
      grayLight: string;
      grayLighter: string;

      success: string;
      warning: string;
      danger: string;
      info: string;
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

    fonts: {
      primary: string;
      secondary: string;
    };

    fontSize: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
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
