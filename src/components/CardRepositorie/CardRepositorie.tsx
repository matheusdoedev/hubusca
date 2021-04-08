import Image from "next/image";

import * as C from "./CardRepositorie.styles";

export default function CardRepositorie() {
  return (
    <C.CardRepositorieBlock>
      <C.CardRepositorieTitleBlock>
        <Image
          src="/assets/book.svg"
          alt="Repositório"
          title="Repositório"
          width={12}
          height={14.67}
          layout="fixed"
        />
        <C.CardRepositorieTitle>Azeite de Dênde</C.CardRepositorieTitle>
      </C.CardRepositorieTitleBlock>
      <C.CardRepositorieDescription>
        An institutional website project for Azeite de Dendê restaurant, made
        with GatsbyJS and Styled-components.{" "}
      </C.CardRepositorieDescription>
      <C.CardRepositorieFooter>
        <C.CardRepositorieLang>JavaScript</C.CardRepositorieLang>
        <C.CardRepositorieFooterInfo>
          Criado em 25/03/2020
        </C.CardRepositorieFooterInfo>
        <C.CardRepositorieFooterInfo>
          Atualizado há 1 dia
        </C.CardRepositorieFooterInfo>
      </C.CardRepositorieFooter>
    </C.CardRepositorieBlock>
  );
}
