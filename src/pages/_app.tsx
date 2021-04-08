import "bootstrap/dist/css/bootstrap.css";

import { Reset } from "../styles/generic/reset";
import { Elements } from "../styles/base/elements";
import { Gaps } from "../styles/tools/gaps";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Reset />
      <Elements />
      <Gaps />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
