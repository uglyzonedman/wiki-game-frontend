<template>
	<section class="news">
		<div class="news-container">
			<div class="news-header">
				<div class="news-header__left">
					<Icon
						name="material-symbols:breaking-news-alt-1-outline"
						size="32px"
						color="#CECECE"
					/>
					<h3 class="news-header__left__title">Новости</h3>
				</div>
				<button class="news-header__right">Показать все</button>
			</div>
			<div class="news-items">
				<HomeNewsNew v-for="item of 8" />
			</div>
		</div>
	</section>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.news {
	&-container {
		max-width: 1488px;
		margin: 0 auto;
	}
	&-items {
		margin-top: 20px;
		display: grid;
		grid-template-columns: repeat(auto-fill, 360px);
		justify-content: center;
		row-gap: 20px;
		column-gap: 16px;
	}
	&-header {
		margin-top: 40px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		&__left {
			display: flex;
			align-items: center;
			&__title {
				display: block;
				color: #cecece;
				font-size: 24px;
				font-weight: 700;
				line-height: 18.26px;
				letter-spacing: 3%;
				margin-left: 10px;
			}
		}
		&__right {
			border-radius: 9px;
			background: rgb(27, 27, 27);
			color: rgb(206, 206, 206);
			font-size: 18px;
			font-weight: 600;
			line-height: 18px;
			letter-spacing: 3%;
			padding: 9px 18px;
			border: none;
			cursor: pointer;
		}
	}
}
</style>
