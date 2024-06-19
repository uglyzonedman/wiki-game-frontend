<template>
	<section class="tournaments">
		<div class="tournaments-container">
			<div class="tournaments-headers">
				<div class="tournaments-headers__left">
					<Icon name="solar:cup-bold" color="#C7B147" size="36px" />
					<h3 class="tournaments-headers__left__title">Турниры</h3>
				</div>
				<button class="tournaments-headers__right">Показать все</button>
			</div>
			<div class="tournaments-items">
				<HomeTournamentsTournament v-for="item of 8" :key="item" />
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import IconLeader from '../../../assets/leader.svg'
</script>

<style lang="scss" scoped>
.tournaments {
	margin-top: 40px;
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
	&-headers {
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
