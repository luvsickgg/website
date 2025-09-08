import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "luvsick's cosy corner of the web" },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "luvsick" },
        { name: "theme-color", content: "#000000" },
        { property: "og:title", content: "luvsick.gg" },
        {
          property: "og:description",
          content: "luvsick's cosy corner of the web",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://luvsick.gg" },
        { property: "og:image", content: "https://cdn.luvsick.gg/og.png" },
        { property: "twitter:title", content: "luvsick.gg" },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:image", content: "https://cdn.luvsick.gg/og.png" },
        {
          property: "twitter:description",
          content: "luvsick's cosy corner of the web",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://cdn.luvsick.gg/notobunny.png",
        },
        { rel: "canonical", href: "https://luvsick.gg" },
      ],
    },

    rootAttrs: {
      id: "app",
    },
    rootTag: "body",
  },

  css: ["~/assets/main.css"],

  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },

  nitro: {
    preset: "bun",
  },

  compatibilityDate: "2025-09-05",
});
