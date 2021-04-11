import styled from "styled-components";

import { colors } from "../../styles/settings/colors";
import { breakpoints } from "../../styles/tools/breakpoints";

export const UserDetailsBlock = styled.main`
  background: ${colors.gradient};
  min-height: 100vh;
  padding-bottom: var(--gap-xl);
`;

export const UserDetailsTitle = styled.h1`
  color: white;
  margin-top: var(--gap-xl);
  margin-bottom: var(--gap-lg);
  text-align: center;
`;

export const UserDetailsAvatar = styled.img`
  border-radius: 3px;

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: var(--gap-md);
  }
`;

export const UserDetailsInfos = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: var(--gap-sm);
`;

export const UserDetailsInfosRow = styled.div``;

export const UserDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: var(--gap);
  margin-bottom: var(--gap-sm);
`;

export const UserDetailsInfoSpan = styled.span`
  color: white;
  opacity: 0.7;
`;

export const UserDetailsInfoContent = styled.p`
  color: white;
`;
