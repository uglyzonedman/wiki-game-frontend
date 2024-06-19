<script lang="ts" setup></script>

<template>
	<div class="wrapper">
		<LayoutsHeader />
		<LayoutsNavigation />
		<main class="main">
			<slot />
		</main>
		<LayoutsFooter />
	</div>
</template>

<style lang="scss">
.wrapper {
	min-height: 100%;
	display: flex;
	flex-direction: column;
}

main {
	flex-grow: 1;
}
</style>
