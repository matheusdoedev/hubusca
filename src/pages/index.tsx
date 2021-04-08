import Intro from "../components/Intro/Intro";
import Resultado from "../components/Resultado/Resultado";
import Seo from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Seo title="Pagina Inicial" lang="pt-br" />

      <Intro />
      <Resultado />
      <Footer />
    </>
  );
}
