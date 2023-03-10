<template>
	<div class="label"><slot /></div>
</template>

<style lang="scss" scoped>
	.label {
		position: fixed;
		z-index: 1;
		display: inline-block;
		top: 1rem;
		right: 1rem;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		background-color: #b1dd25;
		color: #000;
		font-size: 0.75rem;
		font-weight: bold;
	}
</style>
