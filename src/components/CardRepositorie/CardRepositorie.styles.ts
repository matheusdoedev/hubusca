import styled from "styled-components";

import { colors } from "../../styles/settings/colors";

export const CardRepositorieBlock = styled.article`
  background: ${colors.secondary2};
  border-radius: 3px;
  width: 100%;
  padding: calc(var(--gap-md) - 1px);
  border: 1px solid white;
  transition: 0.3s;

  &:hover {
    border: 1px solid ${colors.primary};
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const CardRepositorieTitleBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: var(--gap-xs);
  margin-bottom: var(--gap-xs);
`;

export const CardRepositorieTitle = styled.h3`
  color: white;
`;

export const CardRepositorieDescription = styled.p`
  color: white;
  opacity: 0.85;
  margin-bottom: var(--gap-md);
`;

export const CardRepositorieFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardRepositorieLang = styled.span`
  display: flex;
  align-items: center;
  column-gap: var(--gap);
  color: white;
  opacity: 0.75;
  font-size: 0.75rem;

  &:before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${colors.javascript};
  }
`;

export const CardRepositorieFooterInfo = styled.span`
  color: white;
  font-size: 0.75rem;
  opacity: 0.6;
`;
