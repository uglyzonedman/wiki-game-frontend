<template>
	<button class="contribute">
		<div class="contribute-content">
			<IconContribute class="contribute-content__icon" />
			<span class="contribute-content__span">Сотрудничество</span>
			<Icon
				name="material-symbols:keyboard-arrow-down-rounded"
				color="#cecece"
				size="24px"
			/>
		</div>
	</button>
</template>

<script lang="ts" setup>
import IconContribute from '../../../../../assets/contribute.svg'
</script>

<style lang="scss" scoped>
.contribute {
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
