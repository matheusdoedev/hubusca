import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";

import { UserContext } from "../../data/contexts/UserContext";

import * as I from "./Intro.styles";

export default function Intro() {
  const userContext = useContext(UserContext);

  return (
    <I.Intro title="Introdução">
      <Navbar />
      <Container>
        <Row style={{ height: "80vh", alignItems: "center" }}>
          <Col as="section" title="Introdução" sm={12} lg={6}>
            <I.IntroTitle title="Seu buscador de usuários do Github">
              Seu buscador de usuários do Github
            </I.IntroTitle>
            <SearchForm error={userContext?.error} />
          </Col>
        </Row>
      </Container>
    </I.Intro>
  );
}
