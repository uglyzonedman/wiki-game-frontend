<template>
	<div class="search">
		<IconSearch class="search-icon" />
		<input class="search-input" type="text" placeholder="Поиск" />
	</div>
</template>

<script lang="ts" setup>
import IconSearch from '../../../../assets/search.svg'
</script>

<style lang="scss" scoped>
.search {
	border-radius: 8.4px;
	background: rgb(27, 27, 27);
	padding: 12px;
	&-icon {
		color: rgb(91, 91, 91);
		margin-right: 12px;
	}
	&-input {
		background: transparent;
		border: none;
		outline: none;
		color: #ffffff;
		&::placeholder {
			font-size: 18px;
		}
	}
}
</style>
