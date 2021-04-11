import Image from "next/image";

import { IRepositorie } from "../../data/interfaces/Repositorie";

import { getDifferenceBetweenTwoDates } from "../../utils/getDifferenceBetweenTwoDates";
import { getUpdateThereMessage } from "../../utils/getUpdateThereMessage";
import { parseDateInFormat } from "../../utils/parseDateInFormat";

import * as C from "./CardRepositorie.styles";

export default function CardRepositorie(props: { repo: IRepositorie }) {
  const updateThereMessage: string = getUpdateThereMessage(
    getDifferenceBetweenTwoDates(new Date(), new Date(props.repo?.pushed_at))
  );
  const createdAtMessage = `Criado em ${parseDateInFormat(
    props.repo?.created_at
  )}`;

  return (
    <a
      style={{ padding: "0" }}
      href={props.repo?.html_url}
      target="BLANK"
      title={props.repo?.name}
    >
      <C.CardRepositorieBlock title={props.repo?.name}>
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
          <C.CardRepositorieFooterInfo style={{ textAlign: "center" }}>
            {createdAtMessage}
          </C.CardRepositorieFooterInfo>
          <C.CardRepositorieFooterInfo style={{ textAlign: "right" }}>
            {updateThereMessage}
          </C.CardRepositorieFooterInfo>
        </C.CardRepositorieFooter>
      </C.CardRepositorieBlock>
    </a>
  );
}
