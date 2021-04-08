import Button from "../Button/Button";
import Input from "../Input/Input";

import * as S from "./SearchForm.styles";

export default function SearchForm() {
  return (
    <S.SearchFormBlock>
      <Input
        name="buscar-usuario"
        label="Usuário do Github"
        placeholder="Digite o nome do usuário no Githhub"
        title="Usuário do Github"
      />
      <Button content="Buscar" />
    </S.SearchFormBlock>
  );
}
