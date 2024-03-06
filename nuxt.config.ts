// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['nuxt-icon-tw', '@nuxtjs/tailwindcss'],
    devtools: { enabled: true },
    css: ['~/assets/css/globals.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
