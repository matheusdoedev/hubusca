import styled from "styled-components";

import { colors } from "../../styles/settings/colors";

export const CardUserBlock = styled.article`
  background: white;
  border-radius: 3px;
  width: 100%;
  padding: calc(var(--gap-md) - 3px);
  border: 3px solid white;

  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: var(--gap-sm);

  &:hover {
    border: 3px solid ${colors.primary};
    cursor: pointer;
  }
`;

export const CardUserContent = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: var(--gap-sm);
  align-items: center;
`;

export const CardUserContentInfo = styled.div``;

export const CardUserContentInfoSpan = styled.span`
  color: ${colors.secondary};
  opacity: 0.7;
`;

export const CardUserContentInfoContent = styled.p`
  color: ${colors.secondary};
`;
