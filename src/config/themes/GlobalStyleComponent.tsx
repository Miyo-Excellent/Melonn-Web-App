import { createGlobalStyle } from 'styled-components';

import { GlobalStyleComponentPropTypes } from 'types';

export default createGlobalStyle`
  // Variables (DOC): http://www.sass-lang.com/documentation/variables
  // Styled Components (DOC): https://styled-components.com/docs/basics

  // ✨ (START) ✨ Theme: Dynamic Sass Variable
  $global-text-color: global ${({ theme }: GlobalStyleComponentPropTypes) => theme.text};
  $global-textAccent-color: global ${({ theme }: GlobalStyleComponentPropTypes) => theme.textAccent};
  $global-primary-color: global ${({ theme }: GlobalStyleComponentPropTypes) => theme.primary};
  $global-secondary-color: global ${({ theme }: GlobalStyleComponentPropTypes) => theme.secondary};
  $global-tertiary-color: global ${({ theme }: GlobalStyleComponentPropTypes) => theme.tertiary};
  // ✨ (END) ✨ Theme: Dynamic Sass Variable

  // ✨ (START) ✨ Theme: Dynamic CSS Variable
  :root {
    --text-color: ${({ theme }: GlobalStyleComponentPropTypes) => theme.text};
    --textAccent-color: ${({ theme }: GlobalStyleComponentPropTypes) => theme.textAccent};
    --primary-color: ${({ theme }: GlobalStyleComponentPropTypes) => theme.primary};
    --secondary-color: ${({ theme }: GlobalStyleComponentPropTypes) => theme.secondary};
    --tertiary-color: ${({ theme }: GlobalStyleComponentPropTypes) => theme.tertiary};
  }
  // ✨ (END) ✨ Theme: Dynamic CSS Variable

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }

  body {
    background: $body-color;
    color: $text-color;
    height: 100vh;
  }
`;
