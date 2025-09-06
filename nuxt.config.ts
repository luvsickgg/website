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
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://cdn.luvsick.gg/notobunny.png",
        },
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
