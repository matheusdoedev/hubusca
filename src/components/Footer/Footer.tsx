import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Row } from "react-bootstrap";

import * as F from "./Footer.styles";

import withData from "./Footer.withData";

function Footer({ navLinks }) {
  const { pathname } = useRouter();

  return (
    <F.FooterBlock title="Rodapé">
      <Container>
        <Row className="justify-content-center">
          <F.FooterNav className="col-xs-12">
            <F.FooterNavMenu>
              {navLinks.map(({ path, label }, index) => (
                <F.FooterNavItem key={index} title={label}>
                  <Link href={path}>
                    <F.FooterNavLink
                      className={pathname === path && "active"}
                      title={label}
                    >
                      {label}
                    </F.FooterNavLink>
                  </Link>
                </F.FooterNavItem>
              ))}
            </F.FooterNavMenu>
          </F.FooterNav>
        </Row>
        <Row className="justify-content-center">
          <F.FooterCopy className="col-12">
            HUBusca 2021 @ Todos os direitos reservados. Feito por
            <a
              href="https://matheusdoe.com"
              target="BLANK"
              style={{ color: "white" }}
              title="matheusdoedev"
            >
              matheusdoedev
            </a>
          </F.FooterCopy>
        </Row>
      </Container>
    </F.FooterBlock>
  );
}

export default withData(Footer);
