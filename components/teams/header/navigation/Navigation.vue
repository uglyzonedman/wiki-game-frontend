<template>
	<nav class="navigation">
		<ul class="navigation-list">
			<button
				v-for="region of regions"
				:key="region.id"
				class="navigation-list__item"
			>
				{{ region.name }}
			</button>
		</ul>
	</nav>
</template>

<script setup lang="ts">
const regions = [
	{ id: 1, name: 'North America' },
	{ id: 2, name: 'Europe' },
	{ id: 3, name: 'CIS' },
	{ id: 4, name: 'China' },
	{ id: 5, name: 'Southeast Asia' },
]
</script>

<style scoped lang="scss">
.navigation {
	&-list {
		display: flex;
		align-items: center;
		&__item {
			cursor: pointer;
			color: rgb(102, 102, 102);
			font-size: 18px;
			font-weight: 500;
			line-height: 12.44px;
			letter-spacing: 3%;
			background: transparent;
			border: none;
			padding: 14px;
			margin-left: 10px;
			&:hover {
				border-radius: 6.53px;
				background: rgb(27, 27, 27);
			}
		}
	}
}
</style>
