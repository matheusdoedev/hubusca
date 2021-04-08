import styled from "styled-components";

import { colors } from "../../styles/settings/colors";

export const Navbar = styled.header`
  padding-top: var(--gap-sm);

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: white;
    opacity: 0.2;
    margin-top: var(--gap-sm);
  }
`;

export const NavbarBrand = styled.section`
  justify-content: center;
`;

export const NavbarMenu = styled.ul`
  display: flex;
  column-gap: var(--gap-sm);
  justify-content: flex-end;
`;

export const NavbarMenuLink = styled.a`
  color: white;
  transition: 0.3s;

  &:hover {
    color: ${colors.primary};
    transition: 0.3s;
  }
`;
