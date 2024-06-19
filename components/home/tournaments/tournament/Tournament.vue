<template>
	<div class="tournament">
		<NuxtImg style="border-radius: 8px" width="340" src="/new1.jpeg" />
		<h3 class="tournament-title">Lima Major 2023</h3>
		<div class="tournament-items">
			<div class="tournament-items__date">
				<Icon
					name="material-symbols:calendar-today"
					color="#CECECE"
					size="24px"
				/>
				<span class="tournament-items__date__text">Feb 20–Mar 06, 2023</span>
			</div>
			<div class="tournament-items__price">
				<span class="tournament-items__price__text">$500,000</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.tournament {
	width: 360px;
	padding: 10px;
	box-sizing: border-box;
	border: 1px solid rgb(38, 38, 38);
	border-radius: 18px;
	&-title {
		display: block;
		margin-top: 10px;
		color: rgb(206, 206, 206);
		font-size: 20px;
		font-weight: 600;
		line-height: 20px;
		letter-spacing: 3%;
	}
	&-items {
		margin-top: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		&__price {
			padding: 13px;
			border-radius: 9px;
			background: rgb(16, 16, 16);
			&__text {
				color: rgb(255, 228, 98);
				font-size: 16px;
				font-weight: 600;
				line-height: 16px;
				letter-spacing: 3%;
			}
		}
		&__date {
			display: flex;
			align-items: center;
			border-radius: 9px;
			background: rgb(16, 16, 16);
			padding: 13px;
			&__text {
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
</style>
