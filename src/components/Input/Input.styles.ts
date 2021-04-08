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
  padding: var(--gap-xs);
  color: ${colors.secondary};
  width: 100%;
  border: none;
  border-radius: 3px;

  &:focus {
    filter: brightness(90%);
  }
`;

export const InputInfo = styled.span`
  color: var(--danger);
`;
