import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        padding: 0;
    }

    html {
     scroll-behavior: smooth;
    }

    body{
        background:${({ theme }) => theme.colors.primaryBlack};

        color:${({ theme }) => theme.colors.primaryWhite};

        font-family:${({ theme }) => theme.fonts.primary};

        font-size:${({ theme }) => theme.fontSize.base};

        line-height:1.5;

        min-height:100vh;

        text-rendering:optimizeLegibility;

        -webkit-font-smoothing:antialiased;

        -moz-osx-font-smoothing:grayscale;
    }

    img {
        display: block;

        max-width: 100%;
    }

    a {
        color: inherit;

        text-decoration: none;
    }

    ul,
    ol {
        list-style: none;
    }

    button {
        font: inherit;

        cursor: pointer;

        border: none;

        background: none;
    }
`;
