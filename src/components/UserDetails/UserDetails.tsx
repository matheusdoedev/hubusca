import { useContext } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "../Navbar/Navbar";
import UserRepositories from "../UserRepositories/UserRepositories";

import * as U from "./UserDetails.styles";

import { useGetUserDetails } from "../../data/hooks/useGetUserDetails";

export default function UserDetails() {
  const { query } = useRouter();

  const { user } = useGetUserDetails(String(query.login));

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
            <U.UserDetailsAvatar
              src={user?.avatar_url}
              alt={user?.name}
              title={user?.name}
            />
          </Col>
          <U.UserDetailsInfos className="col-12 col-sm-8">
            <div>
              <U.UserDetailsInfo>
                <U.UserDetailsInfoSpan>ID</U.UserDetailsInfoSpan>
                <U.UserDetailsInfoContent>{user?.id}</U.UserDetailsInfoContent>
              </U.UserDetailsInfo>
              {user?.name && (
                <U.UserDetailsInfo>
                  <U.UserDetailsInfoSpan>Nome</U.UserDetailsInfoSpan>
                  <U.UserDetailsInfoContent>
                    {user?.name}
                  </U.UserDetailsInfoContent>
                </U.UserDetailsInfo>
              )}
              <U.UserDetailsInfo>
                <U.UserDetailsInfoSpan>Usuário</U.UserDetailsInfoSpan>
                <U.UserDetailsInfoContent>
                  {user?.login}
                </U.UserDetailsInfoContent>
              </U.UserDetailsInfo>
              {user?.location && (
                <U.UserDetailsInfo>
                  <U.UserDetailsInfoSpan>Localização</U.UserDetailsInfoSpan>
                  <U.UserDetailsInfoContent>
                    {user?.location}
                  </U.UserDetailsInfoContent>
                </U.UserDetailsInfo>
              )}
            </div>
            <div>
              <U.UserDetailsInfo>
                <U.UserDetailsInfoSpan>
                  Qtd. de seguidores
                </U.UserDetailsInfoSpan>
                <U.UserDetailsInfoContent>
                  {user?.followers}
                </U.UserDetailsInfoContent>
              </U.UserDetailsInfo>
              <U.UserDetailsInfo>
                <U.UserDetailsInfoSpan>
                  Qtd. de repositórios
                </U.UserDetailsInfoSpan>
                <U.UserDetailsInfoContent>
                  {user?.public_repos}
                </U.UserDetailsInfoContent>
              </U.UserDetailsInfo>
            </div>
          </U.UserDetailsInfos>
        </Row>
      </Container>

      <UserRepositories repos={user?.repos} />
    </U.UserDetailsBlock>
  );
}
