import styled from "styled-components";

import bgImg from "../../../public/assets/intro-bg.jpg";
import { border } from "../../styles/trumps/border";

export const Intro = styled.main`
  min-height: 100vh;
  background: url(${bgImg}) no-repeat;
  background-size: cover;
`;

export const IntroTitle = styled.h1`
  color: white;

  &:after {
    content: "";
    display: block;
    width: 80px;
    height: 1px;
    background: white;
    opacity: 0.2;
    margin: var(--gap-md) 0 calc(var(--gap-lg) - 8px) 0;

    ${border.radius}
  }
`;
