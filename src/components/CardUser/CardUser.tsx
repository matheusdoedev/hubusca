import Image from "next/image";

import * as C from "./CardUser.styles";

const CardUser = () => {
  return (
    <C.CardUserBlock>
      <Image
        src="/assets/card-resultado-img.jpg"
        alt="User"
        title="User"
        width={180}
        height={154}
        layout="responsive"
      />
      <C.CardUserContent>
        <C.CardUserContentInfo>
          <C.CardUserContentInfoSpan>Nome</C.CardUserContentInfoSpan>
          <C.CardUserContentInfoContent>John Papa</C.CardUserContentInfoContent>
        </C.CardUserContentInfo>
        <C.CardUserContentInfo>
          <C.CardUserContentInfoSpan>Nome</C.CardUserContentInfoSpan>
          <C.CardUserContentInfoContent>John Papa</C.CardUserContentInfoContent>
        </C.CardUserContentInfo>
        <C.CardUserContentInfo>
          <C.CardUserContentInfoSpan>Nome</C.CardUserContentInfoSpan>
          <C.CardUserContentInfoContent>John Papa</C.CardUserContentInfoContent>
        </C.CardUserContentInfo>
      </C.CardUserContent>
    </C.CardUserBlock>
  );
};

export default CardUser;
