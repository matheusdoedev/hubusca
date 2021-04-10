import { useContext } from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";

import * as S from "./SearchForm.styles";

import { UserContext } from "../../data/contexts/UserContext";

export default function SearchForm(props: { error: string }) {
  const userContext = useContext(UserContext);

  return (
    <S.SearchFormBlock onSubmit={userContext?.handleGetUser}>
      <Input
        name="buscar-usuario"
        label="Usuário do Github"
        placeholder="Digite o nome do usuário no Githhub"
        title="Usuário do Github"
        value={userContext?.userLogin}
        setValue={userContext?.setUserLogin}
        info={props.error ? props.error : ""}
      />
      <Button content="Buscar" />
    </S.SearchFormBlock>
  );
}
