import { siteMetadata } from "./site-metadata";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "./src",
  css: ["~/assets/styles/index.scss"],
  app: {
    head: {
      title: siteMetadata.title,
      htmlAttrs: {
        lang: siteMetadata.lang,
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: siteMetadata.description,
        },
        { name: "format-detection", content: "telephone=no" },
        {
          property: `og:title`,
          content: siteMetadata.title,
        },
        {
          property: `og:description`,
          content: siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: siteMetadata.description,
        },
        {
          name: "theme-color",
          content: siteMetadata.themeColor,
        },
        {
          name: "msapplication-TileColor",
          content: siteMetadata.themeColor,
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Serif:wght@700&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
});
