import { Container, Row, Col } from "react-bootstrap";

import CardUser from "../CardUser/CardUser";
import SearchForm from "../SearchForm/SearchForm";

import * as R from "./Resultado.styles";

export default function Resultado() {
  return (
    <R.ResultadoBlock title="Resultado da pesquisa">
      <Container>
        <Row>
          <Col
            sm={12}
            md={{ offset: 3, span: 6 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <R.ResultadoTitle>Resultado</R.ResultadoTitle>
            <CardUser />
            <R.ResultadoOu>ou</R.ResultadoOu>
            <R.ResultadoPesquiseOutroUsuario>
              Pesquise outro usuário
            </R.ResultadoPesquiseOutroUsuario>
            <SearchForm />
          </Col>
        </Row>
      </Container>
    </R.ResultadoBlock>
  );
}
