<template>
	<nav class="navigation">
		<div class="navigation-container">
			<ul class="navigation-content">
				<li class="navigation-content__item">
					<NuxtLink to="/teams">Команды</NuxtLink>
				</li>
				<li class="navigation-content__item">
					<NuxtLink>Команды</NuxtLink>
				</li>
			</ul>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
.navigation {
	box-sizing: border-box;
	border-bottom: 1px solid rgb(38, 38, 38);
	backdrop-filter: blur(54px);
	background: rgba(15, 15, 15, 0.9);
	padding: 11px 0;
	&-container {
		max-width: 1756px;
		width: 100%;
		margin: 0 auto;
	}
	&-content {
		display: flex;
		align-items: center;
		&__item {
			margin-right: 30px;
			color: rgb(102, 102, 102);
			font-size: 16px;
			font-weight: 500;
			line-height: 16px;
			letter-spacing: 3%;
			padding: 12px 0;
			cursor: pointer;
		}
	}
}
</style>

<script setup lang="ts"></script>
