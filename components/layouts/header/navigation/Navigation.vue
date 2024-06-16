<template>
	<nav class="navigation">
		<ul class="navigation-list">
			<li class="navigation-list__item">
				<LayoutsHeaderNavigationTrending />
			</li>
			<li class="navigation-list__item">
				<LayoutsHeaderNavigationLeader />
			</li>
			<li class="navigation-list__item">
				<LayoutsHeaderNavigationContribute />
			</li>
		</ul>
	</nav>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.navigation {
	&-list {
		display: flex;
		&__item {
			margin-right: 12px;
		}
	}
}
</style>
