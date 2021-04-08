import styled from "styled-components";

import { colors } from "../../styles/settings/colors";

export const FooterBlock = styled.footer`
  padding: var(--gap-lg) 0;
  background: ${colors.secondary};
`;

export const FooterNav = styled.nav`
  margin-bottom: var(--gap-sm);
`;

export const FooterNavMenu = styled.ul`
  display: flex;
  justify-content: center;
`;

export const FooterNavLink = styled.a`
  color: white;
  transition: 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    color: ${colors.primary};
    transition: 0.3s;
  }

  /* &:after {
    content: "";
    display: inline-block;
    width: 5px;
    height: 4px;
    border-radius: 50%;
    background: white;
    opacity: 0.4;
    margin-left: var(--gap-xs);
  }

  & ~ & {
    &:after {
      display: none;
    }
  } */
`;

export const FooterCopy = styled.p`
  color: white;
  opacity: 0.6;
  text-align: center;
  font-size: 0.875rem;
  max-width: 100%;
`;
