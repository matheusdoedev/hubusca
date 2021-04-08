import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import Brand from "../Brand/Brand";

import * as N from "./Navbar.styles";

import withData from "./Navbar.withData";

function Navbar({ navLinks }) {
  return (
    <N.Navbar>
      <Container>
        <Row className="align-items-center">
          <Col
            className="d-flex justify-content-center col-4"
            xs={4}
            sm={{ offset: 4, span: 4 }}
          >
            <Brand />
          </Col>
          <nav className="navbar__menu col-8 col-sm-4 justify-content-end">
            <N.NavbarMenu>
              {navLinks.map(({ path, label }, index) => (
                <li key={index} title={label}>
                  <Link href={path}>
                    <N.NavbarMenuLink title={label}>{label}</N.NavbarMenuLink>
                  </Link>
                </li>
              ))}
            </N.NavbarMenu>
          </nav>
        </Row>
      </Container>
    </N.Navbar>
  );
}

export default withData(Navbar);
