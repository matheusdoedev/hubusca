import "bootstrap/dist/css/bootstrap.css";

import { Reset } from "../styles/generic/reset";
import { Elements } from "../styles/base/elements";
import { Gaps } from "../styles/tools/gaps";

import { UserContextComponent } from "../data/contexts/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextComponent>
      <Reset />
      <Elements />
      <Gaps />

      <Component {...pageProps} />
    </UserContextComponent>
  );
}

export default MyApp;
