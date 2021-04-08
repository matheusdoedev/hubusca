import styled from "styled-components";

import { colors } from "../../styles/settings/colors";

export const ButtonBlock = styled.button`
  background: ${colors.primary};
  border-radius: 3px;
  padding: var(--gap-xs) var(--gap-sm);
  transition: 0.3s;

  &:hover {
    background: ${colors.support};
    transition: 0.3s;
  }
`;
