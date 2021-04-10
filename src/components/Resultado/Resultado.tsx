import { useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";

import CardUser from "../CardUser/CardUser";
import SearchForm from "../SearchForm/SearchForm";
import Loading from "../Loading/Loading";

import * as R from "./Resultado.styles";

import { UserContext } from "../../data/contexts/UserContext";

export default function Resultado() {
  const userContext = useContext(UserContext);

  return (
    <R.ResultadoBlock id="resultado" title="Resultado da pesquisa">
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
            {userContext?.status === "LOADING" ? (
              <Loading />
            ) : (
              userContext?.user && (
                <>
                  <CardUser user={userContext.user} />
                  <R.ResultadoOu>ou</R.ResultadoOu>
                </>
              )
            )}

            <R.ResultadoPesquiseOutroUsuario>
              Pesquise um usuário
            </R.ResultadoPesquiseOutroUsuario>
            <SearchForm error={userContext?.error} />
          </Col>
        </Row>
      </Container>
    </R.ResultadoBlock>
  );
}
