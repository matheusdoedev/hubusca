import styled from "styled-components";

import { colors } from "../../styles/settings/colors";

export const ResultadoBlock = styled.section`
  background: ${colors.secondary};
  opacity: 0.95;
  padding: var(--gap-xl) 0;
`;

export const ResultadoTitle = styled.h2`
  color: white;
  margin-bottom: var(--gap-lg);
`;

export const ResultadoPesquiseOutroUsuario = styled.h3`
  color: white;
  margin-bottom: var(--gap-md);
`;

export const ResultadoOu = styled.span`
  color: white;
  opacity: 0.7;
  margin: var(--gap-md) 0;
`;
