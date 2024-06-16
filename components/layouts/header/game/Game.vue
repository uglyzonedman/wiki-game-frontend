<template>
	<button class="game">
		<div class="game-content">
			<IconDota class="game-content__icon" />
			<span class="game-content__span">DOTA 2</span>
			<Icon
				name="material-symbols:keyboard-arrow-down-rounded"
				color="#cecece"
				size="24px"
			/>
		</div>
	</button>
</template>

<script lang="ts" setup>
import IconDota from '../../../../assets/dota.svg'
</script>

<style lang="scss">
.game {
	cursor: pointer;
	border-radius: 9px;
	border: none;
	background: #1b1b1b;
	&-content {
		padding: 10px;
		&__span {
			color: rgb(206, 206, 206);
			font-size: 18px;
			font-weight: 200;
			line-height: 16px;
			letter-spacing: 3%;
			margin: 0 10px;
		}
		&__icon {
			color: #de4e4d;
		}
		&__arrow {
		}
	}
}
</style>
