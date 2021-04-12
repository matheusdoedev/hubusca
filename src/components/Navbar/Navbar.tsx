import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";

import Brand from "../Brand/Brand";

import * as N from "./Navbar.styles";

import useMenuMobile from "../../data/hooks/useMenuMobile";

import withData from "./Navbar.withData";

function Navbar({ navLinks }) {
  const { pathname } = useRouter();

  const { handleActive } = useMenuMobile();

  return (
    <N.Navbar title="Navegação">
      <Container>
        <Row className="align-items-center">
          <Col
            className="d-flex justify-content-center col-4"
            xs={4}
            md={{ offset: 4, span: 4 }}
          >
            <Brand />
          </Col>
          <Col xs={8} md={4}>
            <N.NavbarNav data-mobile="menu">
              <N.NavbarMenu>
                {navLinks.map(({ path, label }, index: number) => (
                  <li key={index} title={label}>
                    <Link href={path}>
                      <N.NavbarMenuLink
                        className={pathname === path && "active"}
                        title={label}
                      >
                        {label}
                      </N.NavbarMenuLink>
                    </Link>
                  </li>
                ))}
              </N.NavbarMenu>
            </N.NavbarNav>
            <N.NavbarMenuMobileToggle
              onClick={handleActive}
              data-mobile="toggle"
            >
              <span></span>
            </N.NavbarMenuMobileToggle>
          </Col>
        </Row>
      </Container>
    </N.Navbar>
  );
}

export default withData(Navbar);
