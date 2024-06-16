// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['nuxt-svgo', '@nuxtjs/google-fonts', 'nuxt-icon', '@nuxt/image'],
	googleFonts: {
		families: {
			Oswald: [100, 300, 400, 700, 900],
		},
		display: 'swap',
	},
})
