import styled from "styled-components";

import { colors } from "../../styles/settings/colors";
import { hover } from "../../styles/trumps/hover";

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

export const FooterNavItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child):after {
    content: "";
    display: inline-block;
    width: 5px;
    height: 4px;
    border-radius: 50%;
    background: white;
    opacity: 0.4;
    margin-left: var(--gap-xs);
    margin-right: var(--gap-xs);
  }
`;

export const FooterNavLink = styled.a`
  color: white;
  display: flex;
  align-items: center;

  ${hover.link}

  &.active {
    color: ${colors.primary};
  }
`;

export const FooterCopy = styled.p`
  color: white;
  opacity: 0.6;
  text-align: center;
  font-size: 0.875rem;
  max-width: 100%;
`;

export const FooterCopyLink = styled.a`
  color: white;

  ${hover.link}
`;
