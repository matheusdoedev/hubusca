import { createGlobalStyle } from "styled-components";

import { colors } from "../settings/colors";
import { fonts } from "../settings/fonts";

export const Elements = createGlobalStyle`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${fonts.fontPrimary}

    color: ${colors.secondary};
    font-weight: 700;
    line-height: 1.1em;
    letter-spacing: 1px;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.25rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.125rem;
  }

  p,
  a,
  button,
  input,
  select,
  span {
    color: ${colors.secondary};
  }

  p {
    ${fonts.fontSecondary};
    font-size: 0.875rem;
    line-height: 1.5em;
    max-width: 30em;
    font-weight: 400;
  }

  a,
  button {
    ${fonts.fontPrimary};
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.1em;
    letter-spacing: 1px;
  }

  input,
  select,
  span {
    ${fonts.fontSecondary};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.1em;
  }
`;
