import Head from "next/head";

import { siteMetadata } from "../../config/siteMetadata";

import { SEOProps } from "./SEO.interface";

const Seo: React.FC<SEOProps> = ({ title, description, lang }) => {
  const metaDescription = description || siteMetadata.description;
  const metaLang = lang || siteMetadata.lang;

  return (
    <html lang={metaLang}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content={siteMetadata.type} />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content={lang} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta name="keywords" content={siteMetadata.keywords} />
        <meta name="description" content={metaDescription} />
        <title>
          {title} - {siteMetadata.title}
        </title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jura:wght@600;700&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
    </html>
  );
};

export default Seo;
