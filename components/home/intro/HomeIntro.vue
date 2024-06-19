<template>
	<div class="home-intro">
		<video class="home-intro__video" loop autoplay muted>
			<source src="../../../assets/dota2.mp4" type="video/mp4" />
		</video>
		<div class="home-intro__text" ref="introText">
			<h3 class="home-intro__text__title">
				«СОВРЕМЕННЫЙ САЙТ ПОСВЯЩЕННЫЙ ИГРАМ»
			</h3>
			<p class="home-intro__text__description">
				Добро пожаловать на наш сайт новостей, где вы найдете самые свежие и
				актуальные новости со всего мира. Будьте в курсе событий вместе с нами!
			</p>
			<div class="home-intro__text__links">
				<button
					@click="
						openUrlByClick(
							`https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D1%87%D0%B8%D0%BC%D1%83%D1%87%D0%B8`
						)
					"
					class="home-intro__text__links__item"
				>
					<Icon name="logos:discord-icon" size="36px" />
					<span>Discord</span>
				</button>
				<button
					@click="
						openUrlByClick(
							`https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D1%87%D0%B8%D0%BC%D1%83%D1%87%D0%B8`
						)
					"
					class="home-intro__text__links__item"
				>
					<Icon name="logos:telegram" size="36px" />
					<span>Telegram</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const router = useRouter()

const introText = ref<HTMLElement | null>(null)

const openUrlByClick = (url: string) => {
	window.open(url, '_blank')
}

onMounted(() => {
	if (introText.value !== null) {
		setTimeout(() => {
			introText.value !== null
				? (introText.value.style.transform = 'translateX(0)')
				: null
		}, 100)
	}

	const handleScroll = (): void => {
		const intro = document.querySelector('.home-intro') as HTMLElement
		const video = document.querySelector(
			'.home-intro__video'
		) as HTMLVideoElement

		if (!intro || !video) return

		const introHeight: number = intro.offsetHeight
		const scrollY: number = window.scrollY
		//TODO
		// if (scrollY <= introHeight) {
		// 	video.style.transform = `translateY(${scrollY * 0.5}px)`
		// }
	}

	window.addEventListener('scroll', handleScroll)

	onBeforeUnmount(() => {
		window.removeEventListener('scroll', handleScroll)
	})
})
</script>

<style lang="scss" scoped>
.home {
	&-intro {
		position: relative;
		height: 97vh;
		overflow: hidden;

		&__video {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			transform: translateY(0);
			transition: transform 0.1s linear;
			opacity: 0.8; /* Полупрозрачность видео */
		}

		&__text {
			position: absolute;
			max-width: 1200px;
			width: 100%;
			top: 30%;
			left: 5%;
			transform: translateX(-200%);
			transition: transform 0.5s ease;
			color: white;
			z-index: 1;
			h3 {
				max-width: 800px;
				width: 100%;
				font-weight: 700;
				font-size: 64px;
			}
			p {
				font-weight: 500;
				font-size: 36px;
			}
			&__links {
				display: flex;
				margin-top: 20px;
				&__item {
					display: flex;
					align-items: center;
					margin-right: 20px;
					cursor: pointer;
					border-radius: 9px;
					background: #1b1b1b;
					border: none;
					padding: 6px;

					span {
						color: rgb(206, 206, 206);
						font-size: 16px;
						font-weight: 600;
						line-height: 16px;
						letter-spacing: 3%;
						margin-left: 10px;
					}
				}
			}
		}
	}
}
</style>
