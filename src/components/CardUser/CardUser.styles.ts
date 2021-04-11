import styled from "styled-components";

import { colors } from "../../styles/settings/colors";
import { breakpoints } from "../../styles/tools/breakpoints";

export const CardUserBlock = styled.article`
  background: ${colors.secondary2};
  border-radius: 3px;
  width: 100%;
  padding: calc(var(--gap-md) - 1px);
  border: 1px solid white;
  transition: 0.3s;

  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: var(--gap-sm);

  &:hover {
    border: 1px solid ${colors.primary};
    cursor: pointer;
    transition: 0.3s;
  }

  @media (max-width: ${breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: var(--gap-sm);
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    column-gap: var(--gap-xs);
  }
`;

export const CardUserAvatar = styled.img`
  width: 160px;

  @media (max-width: ${breakpoints.xl}) {
    width: 120px;
  }
`;

export const CardUserContent = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: var(--gap-sm);
  row-gap: var(--gap-sm);
  align-items: center;
`;

export const CardUserContentInfo = styled.div``;

export const CardUserContentInfoSpan = styled.span`
  color: white;
  opacity: 0.7;
`;

export const CardUserContentInfoContent = styled.p`
  color: white;
`;
