import { Container, Row, Col } from "react-bootstrap";

import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";

import * as I from "./Intro.styles";

export default function Intro() {
  return (
    <I.Intro>
      <Navbar />
      <Container>
        <Row style={{ height: "80vh", alignItems: "center" }}>
          <Col as="section" title="Introdução" sm={12} md={6}>
            <I.IntroTitle title="Seu buscador de usuários do Github">
              Seu buscador de usuários do Github
            </I.IntroTitle>
            <SearchForm />
          </Col>
        </Row>
      </Container>
    </I.Intro>
  );
}
