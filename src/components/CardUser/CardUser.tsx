import Link from "next/link";

import { IUser } from "../../data/interfaces/User";

import * as C from "./CardUser.styles";

export default function CardUser(props: { user: IUser }) {
  return (
    <Link href={`/user/${props.user?.login}`}>
      <C.CardUserBlock title={props.user?.name}>
        <C.CardUserAvatar
          src={props.user?.avatar_url}
          alt="User"
          title={props.user?.name}
        />
        <C.CardUserContent>
          <C.CardUserContentInfo>
            <C.CardUserContentInfoSpan>Nome</C.CardUserContentInfoSpan>
            <C.CardUserContentInfoContent>
              {props.user?.name}
            </C.CardUserContentInfoContent>
          </C.CardUserContentInfo>
          <C.CardUserContentInfo>
            <C.CardUserContentInfoSpan>Usuário</C.CardUserContentInfoSpan>
            <C.CardUserContentInfoContent>
              {props.user?.login}
            </C.CardUserContentInfoContent>
          </C.CardUserContentInfo>
          <C.CardUserContentInfo>
            <C.CardUserContentInfoSpan>Localização</C.CardUserContentInfoSpan>
            <C.CardUserContentInfoContent>
              {props.user?.location}
            </C.CardUserContentInfoContent>
          </C.CardUserContentInfo>
        </C.CardUserContent>
      </C.CardUserBlock>
    </Link>
  );
}
