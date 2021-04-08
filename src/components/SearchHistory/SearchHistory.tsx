import { Container, Row, Col } from "react-bootstrap";
import CardUser from "../CardUser/CardUser";

import Navbar from "../Navbar/Navbar";

import * as S from "./SearchHistory.styles";

export default function SearchHistory() {
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
          <Col xs={12} sm={6}>
            <CardUser />
          </Col>
          <Col xs={12} sm={6}>
            <CardUser />
          </Col>
          <Col xs={12} sm={6}>
            <CardUser />
          </Col>
          <Col xs={12} sm={6}>
            <CardUser />
          </Col>
          <Col xs={12} sm={6}>
            <CardUser />
          </Col>
          <Col xs={12} sm={6}>
            <CardUser />
          </Col>
          <Col xs={12} sm={6}>
            <CardUser />
          </Col>
          <Col xs={12} sm={6}>
            <CardUser />
          </Col>
        </Row>
      </Container>
    </S.SearchHistoryBlock>
  );
}
