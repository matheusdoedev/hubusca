import "bootstrap/dist/css/bootstrap.css";

import { Animations } from "../styles/settings/animations";
import { Reset } from "../styles/generic/reset";
import { Elements } from "../styles/base/elements";
import { Gaps } from "../styles/tools/gaps";

import { UserContextComponent } from "../data/contexts/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextComponent>
      <Animations />
      <Reset />
      <Elements />
      <Gaps />

      <Component {...pageProps} />
    </UserContextComponent>
  );
}

export default MyApp;
