import styled from "styled-components";

import { BarLoader } from "react-spinners";

export const Loading = styled(BarLoader)`
  border-color: white;
  margin-bottom: var(--gap-md);

  > span {
    background-color: white;
  }
`;
