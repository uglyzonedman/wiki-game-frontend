<template>
	<button class="trending">
		<div class="trending-content">
			<IconTranding class="trending-content__icon" />
			<span class="trending-content__span">Тренды</span>
			<Icon
				name="material-symbols:keyboard-arrow-down-rounded"
				color="#cecece"
				size="24px"
			/>
		</div>
	</button>
</template>

<script lang="ts" setup>
import IconTranding from '~/assets/trending.svg'
</script>

<style lang="scss" scoped>
.trending {
	cursor: pointer;
	border-radius: 9px;
	background: #1b1b1b;
	border: none;
	&-content {
		padding: 10px;
		&__span {
			color: rgb(206, 206, 206);
			font-size: 16px;
			font-weight: 200;
			line-height: 16px;
			letter-spacing: 3%;
			margin: 0 10px;
		}
		&__icon {
			color: #cecece;
		}
		&__arrow {
		}
	}
}
</style>
