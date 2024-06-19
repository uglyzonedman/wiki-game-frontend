<template>
	<div class="teams">
		<div class="teams-container">
			<div class="teams-content">
				<TeamsHeader />
				<div class="teams-content__items">
					<TeamsTeam />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.teams {
	&-container {
		max-width: 1488px;
		margin: 0 auto;
	}
	&-content {
		margin-top: 40px;
		box-sizing: border-box;
		border: 1px solid rgb(27, 27, 27);
		border-radius: 12px;
		padding: 12px;
		&__items {
			margin-top: 20px;
		}
	}
}
</style>
