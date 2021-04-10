import Link from "next/link";

import { IUser } from "../../data/interfaces/User";

import * as C from "./CardUser.styles";

const CardUser: React.FC<{ user: IUser }> = ({ user }) => {
  return (
    <Link href={`/user/${user.login}`}>
      <C.CardUserBlock>
        <img src={user.avatar_url} alt="User" title="User" />
        <C.CardUserContent>
          <C.CardUserContentInfo>
            <C.CardUserContentInfoSpan>Nome</C.CardUserContentInfoSpan>
            <C.CardUserContentInfoContent>
              {user.name}
            </C.CardUserContentInfoContent>
          </C.CardUserContentInfo>
          <C.CardUserContentInfo>
            <C.CardUserContentInfoSpan>Usuário</C.CardUserContentInfoSpan>
            <C.CardUserContentInfoContent>
              {user.login}
            </C.CardUserContentInfoContent>
          </C.CardUserContentInfo>
          <C.CardUserContentInfo>
            <C.CardUserContentInfoSpan>Localização</C.CardUserContentInfoSpan>
            <C.CardUserContentInfoContent>
              {user.location}
            </C.CardUserContentInfoContent>
          </C.CardUserContentInfo>
        </C.CardUserContent>
      </C.CardUserBlock>
    </Link>
  );
};

export default CardUser;
