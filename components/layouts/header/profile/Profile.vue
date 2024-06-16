<template>
	<div class="profile">
		<button class="profile-notification">
			<Icon
				name="material-symbols:notifications-rounded"
				size="28px"
				color="#5B5B5B"
			/>
		</button>
		<button class="profile-settings">
			<Icon
				name="material-symbols:settings-rounded"
				size="28px"
				color="#5B5B5B"
			/>
		</button>
		<button class="profile-auth">
			<Icon
				name="material-symbols:person-2-rounded"
				size="28px"
				color="#5B5B5B"
			/>
		</button>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.profile {
	&-notification {
		background: transparent;
		border: none;
	}
	&-settings {
		background: transparent;
		border: none;
		margin: 0 10px;
	}
	&-auth {
		background: transparent;
		border: none;
	}
}
</style>
