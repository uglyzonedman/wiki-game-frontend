<script lang="ts" setup></script>

<template>
	<header class="header">
		<div class="header-container">
			<div class="header-content">
				<div class="header-content__left">
					<LayoutsHeaderLogo />
					<LayoutsHeaderLine />
					<LayoutsHeaderNavigation />
				</div>
				<div class="header-content__right">
					<LayoutsHeaderSearch />
					<LayoutsHeaderLine />
					<LayoutsHeaderGame />
					<LayoutsHeaderLine />
					<LayoutsHeaderProfile />
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header {
	padding: 14px 10px;
	background: #141414;
	&-container {
		max-width: 1756px;
		width: 100%;
		margin: 0 auto;
	}
	&-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		&__left {
			display: flex;
			align-items: center;
		}
		&__right {
			display: flex;
			align-items: center;
		}
	}
}
</style>
