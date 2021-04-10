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

export const SearchHistoryAdvise = styled.span`
  color: white;
  text-align: center;
  opacity: 0.75;
`;

export const SearchHistoryBackLink = styled.a`
  color: white;
  text-align: center;
  opacity: 0.95;
  text-decoration: underline;
  transition: 0.3s;

  &:hover {
    color: ${colors.primary};
    transition: 0.3s;
    text-decoration: underline;
  }
`;
