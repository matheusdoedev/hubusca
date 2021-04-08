import styled from "styled-components";

import { colors } from "../../styles/settings/colors";

export const SearchHistoryBlock = styled.main`
  background: ${colors.gradient};
  min-height: 100vh;
  padding-bottom: var(--gap-xl);
`;

export const SearchHistoryTitle = styled.h1`
  color: white;
  margin-top: var(--gap-xl);
  margin-bottom: var(--gap-lg);
  text-align: center;
`;
