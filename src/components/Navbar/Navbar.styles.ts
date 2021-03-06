import styled from "styled-components";

import { colors } from "../../styles/settings/colors";
import { breakpoints } from "../../styles/tools/breakpoints";
import { border } from "../../styles/trumps/border";
import { hover } from "../../styles/trumps/hover";

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

export const NavbarNav = styled.nav`
  @media (max-width: ${breakpoints.md}) {
    display: none;

    &.active {
      display: block;
      background: ${colors.secondary2};
      width: 320px;
      position: absolute;
      top: 60px;
      left: 40%;
      z-index: 10;
      margin-left: -215px;
      padding: var(--gap-sm) var(--gap-sm);
      animation: fade-down 0.3s forwards;

      ${border.radius}

      > ul {
        display: flex;
        flex-direction: column;
        align-items: center;

        > li {
          margin-bottom: var(--gap-sm);
          text-align: center;
        }
        > li:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  column-gap: var(--gap-sm);
  justify-content: flex-end;
`;

export const NavbarMenuLink = styled.a`
  color: white;

  ${hover.link}

  &.active {
    color: ${colors.primary};
  }
`;

export const NavbarMenuMobileToggle = styled.span`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  animation: fade-down 0.5s forwards;

  > span {
    display: none;
  }

  @media (max-width: ${breakpoints.md}) {
    > span {
      display: flex;
      flex-direction: column;
      box-sizing: initial;
      transition: 0.3s;
      height: 30px;
      cursor: pointer;

      :after,
      :before {
        content: "";
        display: block;
        width: 40px;
        border: 1px solid white;

        transition: 0.3s;
      }

      :after {
        margin-top: var(--gap);
        box-shadow: 0 10px 0 0 white;
      }
    }

    &.active > span {
      :after {
        box-shadow: none;
        transform: rotate(45deg) translate(-3px, -5.25px);
        transition: 0.3s transform;
        margin-top: 3px;
      }
      :before {
        transform: rotate(-45deg) translate(0, 0);
        transition: 0.3s transform;
        margin-top: 12px;
      }
    }
  }
`;
