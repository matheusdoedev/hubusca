import Footer from "../components/Footer/Footer";
import SearchHistory from "../components/SearchHistory/SearchHistory";
import Seo from "../components/SEO/SEO";

export default function SearchHistoryPage() {
  return (
    <>
      <Seo title="Histórico" />

      <SearchHistory />
      <Footer />
    </>
  );
}
