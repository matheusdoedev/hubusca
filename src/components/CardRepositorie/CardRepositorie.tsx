import Image from "next/image";

import { IRepositorie } from "../../data/interfaces/Repositorie";

import * as C from "./CardRepositorie.styles";

export default function CardRepositorie(props: { repo: IRepositorie }) {
  const updateThere = Math.round(
    (new Date().getTime() - new Date(props.repo?.pushed_at).getTime()) /
      1000 /
      60 /
      60 /
      24
  );

  let updateThereMessage: string = "";

  if (updateThere === 0) {
    updateThereMessage = "Atualizado hoje";
  } else if (updateThere === 1) {
    updateThereMessage = "Atualizado há 1 dia";
  } else if (updateThere > 1 && updateThere <= 30) {
    updateThereMessage = `Atualizado há ${updateThere} dias`;
  } else if (updateThere > 30 && updateThere <= 60) {
    updateThereMessage = `Atualizado há 1 mês`;
  } else {
    updateThereMessage = `Atualizado há ${Math.round(updateThere / 30)} meses`;
  }

  return (
    <a style={{ padding: "0" }} href={props.repo.html_url} target="BLANK">
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
          <C.CardRepositorieTitle>{props.repo?.name}</C.CardRepositorieTitle>
        </C.CardRepositorieTitleBlock>
        <C.CardRepositorieDescription>
          {props.repo?.description}
        </C.CardRepositorieDescription>
        <C.CardRepositorieFooter>
          {props.repo?.language && (
            <C.CardRepositorieLang lang={props.repo?.language}>
              {props.repo?.language}
            </C.CardRepositorieLang>
          )}
          <C.CardRepositorieFooterInfo>
            Criado em 25/03/2020
          </C.CardRepositorieFooterInfo>
          <C.CardRepositorieFooterInfo>
            {updateThereMessage}
          </C.CardRepositorieFooterInfo>
        </C.CardRepositorieFooter>
      </C.CardRepositorieBlock>
    </a>
  );
}
