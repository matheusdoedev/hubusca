import styled from "styled-components";

import { colors } from "../../styles/settings/colors";
import { breakpoints } from "../../styles/tools/breakpoints";
import { border } from "../../styles/trumps/border";
import { hover } from "../../styles/trumps/hover";
import { chooseColorByLang } from "../../utils/chooseColorByLang";

export const CardRepositorieBlock = styled.article`
  position: relative;
  background: ${colors.secondary2};
  width: 100%;
  min-height: 240px;
  padding: calc(var(--gap-md) - 1px);
  border: 1px solid white;
  ${hover.card}
  ${border.radius}

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

  @media (max-width: ${breakpoints.lg}) {
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
    background: ${({ lang }) => chooseColorByLang(lang)};
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
