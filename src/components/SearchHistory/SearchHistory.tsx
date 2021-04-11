import { lazy, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

import Navbar from "../Navbar/Navbar";

import { useGetSearchHistory } from "../../data/hooks/useGetSearchHistory";

import Loading from "../Loading/Loading";
import * as S from "./SearchHistory.styles";

const CardUser = lazy(() => import("../CardUser/CardUser"));

export default function SearchHistory() {
  const { users } = useGetSearchHistory();

  return (
    <S.SearchHistoryBlock>
      <Navbar />

      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col xs={12}>
            <S.SearchHistoryTitle>Histórico de pesquisa</S.SearchHistoryTitle>
          </Col>
        </Row>
        <Row style={{ rowGap: "var(--gap-sm)" }}>
          {users && users.length > 0 ? (
            users.map((user) => (
              <Col key={user.id} xs={12} lg={6}>
                <Suspense fallback={<Loading />}>
                  <CardUser user={user} />
                </Suspense>
              </Col>
            ))
          ) : (
            <Col
              xs={12}
              sm={12}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                rowGap: "var(--gap-md)",
              }}
            >
              <S.SearchHistoryAdvise>
                Não há pesquisas recentes
              </S.SearchHistoryAdvise>
              <Link href="/">
                <S.SearchHistoryBackLink>
                  Voltar para a pagina inicial
                </S.SearchHistoryBackLink>
              </Link>
            </Col>
          )}
        </Row>
      </Container>
    </S.SearchHistoryBlock>
  );
}
