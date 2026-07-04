export const theme = {
  colors: {
    // == Cores Primárias ==

    primaryYellow: '#f5df4e',
    primaryBlack: '#1a1a1a',
    primaryWhite: '#ffffff',

    // == Tons de amarelo ==

    yellowDark: '#d4bf3a',
    yellowLight: '#fff6b3',
    yellowGlow: 'rgba(245, 223, 78, 0.30)',

    // == Escala de cinza ==

    grayDarker: '#0a0a0a',
    grayDark: '#222222',
    grayMedium: '#666666',
    grayLight: '#e0e0e0',
    grayLighter: '#f5f5f5',

    // == Cores semânticas ==

    success: '#2dd36f',
    warning: '#ffc409',
    danger: '#eb445a',
    info: '#3dc2ff',
  },

  glass: {
    background: 'rgba(255, 255, 255, 0.08)',
    backgroundLight: 'rgba(255, 255, 255, 0.05)',
    backgroundStrong: 'rgba(255, 255, 255, 0.12)',

    border: 'rgba(255, 255, 255, 0.18)',
    borderStrong: 'rgba(255, 255, 255, 0.25)',

    blur: '10px',
    blurStrong: '20px',

    shadow: '0 8px 32px rgba(0, 0, 0, 0.20)',
  },

  fonts: {
    primary: "'Poppins', sans-serif",
    secondary: "'Barlow', sans-serif",
  },

  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '2.5rem',
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
  },

  width: {
    min: '90%',
    max: '1200px',
  },

  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },

  shadows: {
    sm: '0 2px 4px rgba(0,0,0,.10)',
    md: '0 4px 8px rgba(0,0,0,.15)',
    lg: '0 8px 16px rgba(0,0,0,.20)',
    xl: '0 12px 24px rgba(0,0,0,.25)',
  },

  transitions: {
    fast: '150ms ease',
    base: '300ms ease',
    slow: '500ms ease',
  },

  opacity: {
    disabled: 0.5,
    hover: 0.8,
    overlay: 0.7,
  },

  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1400px',
  },
};
