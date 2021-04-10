import styled from "styled-components";

import { BarLoader } from "react-spinners";

export const LoadingBlock = styled.div`
  margin-bottom: var(--gap-lg);
  width: 100px;
  height: 4px;

  > span {
    display: inline-block;
  }
`;
