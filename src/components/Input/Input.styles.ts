import styled from "styled-components";

import { colors } from "../../styles/settings/colors";

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: var(--gap);
  width: 100%;
`;

export const InputLabel = styled.label`
  color: white;
  opacity: 0.85;
`;

export const InputField = styled.input`
  padding: calc(var(--gap-xs) - 1px);
  background: ${colors.secondary2};
  color: white;
  width: 100%;
  border: 1px solid transparent !important;
  outline: none;
  border-radius: 3px;

  &:focus {
    filter: brightness(90%);
    border: 1px solid ${colors.primary} !important;
  }

  &.error {
    border: 1px solid var(--danger) !important;
  }
`;

export const InputInfo = styled.span`
  color: var(--danger);
`;
