import { Container, Row, Col } from "react-bootstrap";

import CardRepositorie from "../CardRepositorie/CardRepositorie";

import * as U from "./UserRepositories.styles";

export default function UserRepositories() {
  return (
    <U.UserRepositories>
      <Container>
        <Row>
          <Col xs={12}>
            <U.UserRepositoriesTitle>Repositórios</U.UserRepositoriesTitle>
          </Col>
        </Row>
        <Row style={{ rowGap: "var(--gap-sm)" }}>
          <Col xs={12} sm={6}>
            <CardRepositorie />
          </Col>
          <Col xs={12} sm={6}>
            <CardRepositorie />
          </Col>
          <Col xs={12} sm={6}>
            <CardRepositorie />
          </Col>
          <Col xs={12} sm={6}>
            <CardRepositorie />
          </Col>
          <Col xs={12} sm={6}>
            <CardRepositorie />
          </Col>
          <Col xs={12} sm={6}>
            <CardRepositorie />
          </Col>
          <Col xs={12} sm={6}>
            <CardRepositorie />
          </Col>
          <Col xs={12} sm={6}>
            <CardRepositorie />
          </Col>
        </Row>
      </Container>
    </U.UserRepositories>
  );
}
