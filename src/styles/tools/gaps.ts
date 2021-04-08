import { createGlobalStyle } from "styled-components";

export const Gaps = createGlobalStyle`
  :root {
    --gap: 0.5rem;
    --gap-xs: 1rem;
    --gap-sm: 1.5rem;
    --gap-md: 2rem;
    --gap-lg: 4rem;
    --gap-xl: 8rem;
  }
`;
