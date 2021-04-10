import { BarLoader } from "react-spinners";

import * as L from "./Loading.styles";

export default function Loading() {
  return (
    <L.LoadingBlock>
      <BarLoader loading={true} color="#FFF" />
    </L.LoadingBlock>
  );
}
