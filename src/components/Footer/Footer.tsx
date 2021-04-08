import Link from "next/link";
import { Container, Row } from "react-bootstrap";

import * as F from "./Footer.styles";

import withData from "./Footer.withData";

function Footer({ navLinks }) {
  return (
    <F.FooterBlock>
      <Container>
        <Row className="justify-content-center">
          <F.FooterNav className="col-xs-12">
            <F.FooterNavMenu>
              {navLinks.map(({ path, label }, index) => (
                <F.FooterNavItem key={index} title={label}>
                  <Link href={path}>
                    <F.FooterNavLink title={label}>{label}</F.FooterNavLink>
                  </Link>
                </F.FooterNavItem>
              ))}
            </F.FooterNavMenu>
          </F.FooterNav>
        </Row>
        <Row className="justify-content-center">
          <F.FooterCopy className="col-xs-12">
            HUBusca 2021 @ Todos os direitos reservados. Feito por matheusdoedev
          </F.FooterCopy>
        </Row>
      </Container>
    </F.FooterBlock>
  );
}

export default withData(Footer);
