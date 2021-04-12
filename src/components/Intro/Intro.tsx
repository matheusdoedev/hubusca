import { Container, Row, Col } from "react-bootstrap";

import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";

import useSmoothScroll from "../../data/hooks/useSmoothScroll";

import * as I from "./Intro.styles";

export default function Intro() {
  useSmoothScroll();

  return (
    <I.Intro title="Introdução">
      <Navbar />
      <Container>
        <Row style={{ height: "80vh", alignItems: "center" }}>
          <Col as="section" title="Introdução" sm={12} lg={6}>
            <I.IntroTitle title="Seu buscador de usuários do Github">
              Seu buscador de usuários do Github
            </I.IntroTitle>
            <Button
              buttonType="Link"
              href="#resultado"
              data-smooth-scroll="resultado"
              content="Bora começar!"
            />
          </Col>
        </Row>
      </Container>
    </I.Intro>
  );
}
