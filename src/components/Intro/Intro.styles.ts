import styled from "styled-components";

import bgImg from "../../../public/assets/intro-bg.jpg";

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
    border-radius: 3px;
    background: white;
    opacity: 0.2;
    margin: var(--gap-md) 0;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  column-gap: var(--gap-xs);
`;
