<template>
	<div class="new">
		<NuxtImg style="border-radius: 8px" width="340" src="/new1.jpeg" />
		<h3 class="new-title">Lima Major 2023</h3>
		<div class="new-date">
			<Icon
				name="material-symbols:calendar-today"
				color="#CECECE"
				size="24px"
			/>
			<span class="new-date__text">Feb 20–Mar 06, 2023</span>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.new {
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
	&-date {
		margin-top: 10px;
		border-radius: 9px;
		background: rgb(16, 16, 16);
		padding: 16px;
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
</style>
