import { Container, Row, Col } from "react-bootstrap";
import { IRepositorie } from "../../data/interfaces/Repositorie";

import CardRepositorie from "../CardRepositorie/CardRepositorie";

import * as U from "./UserRepositories.styles";

export default function UserRepositories(props: { repos: IRepositorie[] }) {
  return (
    <U.UserRepositories>
      <Container>
        <Row>
          <Col xs={12}>
            <U.UserRepositoriesTitle>Repositórios</U.UserRepositoriesTitle>
          </Col>
        </Row>
        <Row style={{ rowGap: "var(--gap-sm)" }}>
          {props.repos?.length > 0 ? (
            props.repos.map((repo) => (
              <Col key={repo.id} xs={12} sm={6}>
                <CardRepositorie repo={repo} />
              </Col>
            ))
          ) : (
            <Col
              xs="12"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                rowGap: "var(--gap-md)",
              }}
            >
              <U.SearchHistoryAdvise>
                Nenhum repositório encontrado
              </U.SearchHistoryAdvise>
            </Col>
          )}
        </Row>
      </Container>
    </U.UserRepositories>
  );
}
