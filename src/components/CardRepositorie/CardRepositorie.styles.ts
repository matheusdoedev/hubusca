import styled from "styled-components";

import { colors } from "../../styles/settings/colors";
import { breakpoints } from "../../styles/tools/breakpoints";

export const CardRepositorieBlock = styled.article`
  background: ${colors.secondary2};
  border-radius: 3px;
  width: 100%;
  min-height: 240px;
  padding: calc(var(--gap-md) - 1px);
  border: 1px solid white;
  transition: 0.3s;

  position: relative;

  &:hover {
    border: 1px solid ${colors.primary};
    cursor: pointer;
    transition: 0.3s;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: calc(var(--gap-xs) - 1px);
  }
`;

export const CardRepositorieTitleBlock = styled.div`
  display: flex;
  align-items: baseline;
  column-gap: var(--gap-xs);
  margin-bottom: var(--gap-xs);
`;

export const CardRepositorieTitle = styled.h3`
  color: white;
  line-height: 1.5em;
`;

export const CardRepositorieDescription = styled.p`
  color: white;
  opacity: 0.85;
  margin-bottom: var(--gap-md);
`;

export const CardRepositorieFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 88%;

  position: absolute;
  bottom: 32px;

  @media (max-width: ${breakpoints.sm}) {
    width: 91%;
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    width: 91%;
  }
`;

export const CardRepositorieLang = styled.span<{ lang: string }>`
  display: flex;
  align-items: center;
  column-gap: var(--gap);
  color: white;
  opacity: 0.75;
  font-size: 0.75rem;

  &:before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${({ lang }) => {
      switch (lang) {
        case "JavaScript":
          return colors.javascript;
        case "HTML":
          return `#E34F26`;
        case "TypeScript":
          return `#3178C6`;
        case "CSS":
          return `#1572B6`;
        case "C":
          return `#A8B9CC`;
        case "C++":
          return `#00599C`;
        case "SCSS":
          return `#CC6699`;
        case "Python":
          return `#3776AB`;
        case "Java":
          return `#007396`;
        case "Ruby":
          return `#CC342D`;
        case "C#":
          return `#239120`;
        case "Vue":
          return `#4FC08D`;
        case "Shell":
          return `#89e051`;
      }
    }};
  }
`;

export const CardRepositorieFooterInfo = styled.span`
  color: white;
  font-size: 0.75rem;
  opacity: 0.6;

  &:first-child {
    @media (max-width: ${breakpoints.sm}) {
      text-align: left !important;
    }
  }

  &:last-child {
    text-align: right !important;
  }
`;
