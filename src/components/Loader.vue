<template>
	<div class="loader"></div>
</template>

<style lang="scss" scoped>
	.loader {
		width: 2rem;
		height: 2rem;
		margin: 1rem auto;
		border-radius: 100%;
		border: 3px solid #b1dd25;
		border-right-color: transparent;
		animation-name: spin;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
