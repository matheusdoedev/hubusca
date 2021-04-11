import styled from "styled-components";

import { colors } from "../../styles/settings/colors";
import { border } from "../../styles/trumps/border";
import { hover } from "../../styles/trumps/hover";

export const ButtonBlock = styled.button`
  background: ${colors.primary};
  padding: var(--gap-xs) var(--gap-sm);
  ${border.radius};
  ${hover.button};
`;
