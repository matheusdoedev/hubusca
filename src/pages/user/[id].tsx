import UserDetails from "../../components/UserDetails/UserDetails";
import Footer from "../../components/Footer/Footer";
import Seo from "../../components/SEO/SEO";

export default function UserDetailsPage() {
  return (
    <>
      <Seo title="Detalhes do usuário" description="Detalhes do usuário" />

      <UserDetails />
      <Footer />
    </>
  );
}
