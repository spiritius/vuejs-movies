<template>
	<form @submit.prevent="searchStore.getMovies(searchMovie)">
		<input
			type="text"
			placeholder="Type movie title"
			v-model="searchMovie" />
		<button
			class="btn"
			type="submit">
			Go!
		</button>
	</form>
	<Loader v-if="searchStore.loading" />
	<div class="container">
		<Movie
			v-for="movie of searchStore.movies"
			:key="movie.imdbID"
			:movie="movie"
			:isSearch="true" />
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { useSearchStore } from '../stores/SearchStore';
	import Movie from '../components/Movie.vue';
	import Loader from '../components/Loader.vue';

	const searchStore = useSearchStore();
	const searchMovie = ref('');
</script>

<style lang="scss" scoped>
	form {
		max-width: 400px;
		margin: 0 auto 1rem;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	input {
		background: none;
		border: 1px solid #b1dd25;
		border-radius: 4px;
		padding: 0.38rem 0.5rem;
		font: inherit;
		font-size: 0.8rem;
		width: 100%;
		flex: 1;
		margin-right: 0.5rem;
		line-height: 1;
	}
</style>
