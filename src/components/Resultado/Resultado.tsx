import { useContext, lazy, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";

import SearchForm from "../SearchForm/SearchForm";
import Loading from "../Loading/Loading";

import { UserContext } from "../../data/contexts/UserContext";

import * as R from "./Resultado.styles";

const CardUser = lazy(() => import("../CardUser/CardUser"));

export default function Resultado() {
  const userContext = useContext(UserContext);

  return (
    <R.ResultadoBlock id="resultado" title="Resultado da pesquisa">
      <Container>
        <Row>
          <Col
            sm={12}
            lg={{ offset: 2, span: 8 }}
            xl={{ offset: 3, span: 6 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <R.ResultadoTitle>Pesquise um usuário</R.ResultadoTitle>
            <SearchForm error={userContext?.error} />
            {userContext?.status === "LOADING" ? (
              <Loading />
            ) : (
              userContext?.user && (
                <>
                  <R.ResultadoField>Resultado</R.ResultadoField>
                  <Suspense fallback={<Loading />}>
                    <CardUser user={userContext.user} />
                  </Suspense>
                </>
              )
            )}
          </Col>
        </Row>
      </Container>
    </R.ResultadoBlock>
  );
}
