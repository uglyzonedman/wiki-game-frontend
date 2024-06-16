<template>
	<button class="leader">
		<div class="leader-content">
			<IconLeader class="leader-content__icon" />
			<span class="leader-content__span">Лидеры</span>
			<Icon
				name="material-symbols:keyboard-arrow-down-rounded"
				color="#cecece"
				size="24px"
			/>
		</div>
	</button>
</template>

<script setup lang="ts">
import IconLeader from '../../../../../assets/leader.svg'
</script>

<style lang="scss" scoped>
.leader {
	cursor: pointer;
	border-radius: 9px;
	background: transparent;
	border: none;
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
			color: #cecece;
		}
		&__arrow {
		}
	}
}
</style>
