import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "../Navbar/Navbar";
import UserRepositories from "../UserRepositories/UserRepositories";

import * as U from "./UserDetails.styles";

export default function UserDetails() {
  return (
    <U.UserDetailsBlock>
      <Navbar />

      <Container>
        <Row>
          <Col xs={12}>
            <U.UserDetailsTitle>Detalhes do usuário</U.UserDetailsTitle>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4}>
            <Image
              src="/assets/card-resultado-img.jpg"
              alt="Detalhes do usuário"
              width={280}
              height={280}
              layout="responsive"
            />
          </Col>
          <U.UserDetailsInfos className="col-12 col-sm-8">
            <div>
              <U.UserDetailsInfo>
                <U.UserDetailsInfoSpan>ID</U.UserDetailsInfoSpan>
                <U.UserDetailsInfoContent>665</U.UserDetailsInfoContent>
              </U.UserDetailsInfo>
              <U.UserDetailsInfo>
                <U.UserDetailsInfoSpan>Nome</U.UserDetailsInfoSpan>
                <U.UserDetailsInfoContent>
                  Matheus Santos
                </U.UserDetailsInfoContent>
              </U.UserDetailsInfo>
              <U.UserDetailsInfo>
                <U.UserDetailsInfoSpan>Usuário</U.UserDetailsInfoSpan>
                <U.UserDetailsInfoContent>
                  matheusdoedev
                </U.UserDetailsInfoContent>
              </U.UserDetailsInfo>
              <U.UserDetailsInfo>
                <U.UserDetailsInfoSpan>Localização</U.UserDetailsInfoSpan>
                <U.UserDetailsInfoContent>
                  Salvador, BA
                </U.UserDetailsInfoContent>
              </U.UserDetailsInfo>
            </div>
            <div>
              <U.UserDetailsInfo>
                <U.UserDetailsInfoSpan>
                  Qtd. de seguidores
                </U.UserDetailsInfoSpan>
                <U.UserDetailsInfoContent>81</U.UserDetailsInfoContent>
              </U.UserDetailsInfo>
              <U.UserDetailsInfo>
                <U.UserDetailsInfoSpan>
                  Qtd. de repositórios
                </U.UserDetailsInfoSpan>
                <U.UserDetailsInfoContent>41</U.UserDetailsInfoContent>
              </U.UserDetailsInfo>
            </div>
          </U.UserDetailsInfos>
        </Row>
      </Container>

      <UserRepositories />
    </U.UserDetailsBlock>
  );
}
