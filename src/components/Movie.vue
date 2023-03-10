<template>
	<div class="movie">
		<img
			:src="movie.Poster"
			:alt="movie.Title" />
		<div>
			<h5>
				{{ movie.Title }}
				<small>{{ movie.Year }}</small>
			</h5>
			<div
				class="row"
				v-if="!isSearch">
				<button
					class="btn"
					@click="movieStore.toggleWatched(movie.imdbID)">
					<span v-if="!movie.isWatched">Watched</span>
					<span v-else>Unwatch</span>
				</button>
				<button
					class="btn"
					@click="movieStore.deleteMovie(movie.imdbID)">
					Delete
				</button>
			</div>
			<div
				class="row"
				v-else>
				<button
					class="btn"
					@click="searchStore.addToMyMovies(movie)">
					Add
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useMovieStore } from '../stores/MovieStore';
	import { useSearchStore } from '../stores/SearchStore';

	const movieStore = useMovieStore();
	const searchStore = useSearchStore();

	const props = defineProps({
		movie: {
			type: Object,
			required: true,
			default: () => {},
		},
		isSearch: {
			type: Boolean,
			required: false,
			default: false,
		},
	});
</script>

<style lang="scss" scoped>
	.movie {
		padding: 1rem;
		margin: 0 0 1rem;
		border: 1px solid #faf1cb;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;
		align-items: start;
		border-radius: 4px;
		position: relative;

		@media (min-width: 768px) {
			grid-template-columns: 90px 1fr;
		}
	}
	img {
		display: block;
		margin: auto;
		height: 100%;
		max-height: 120px;
		width: auto;
		max-width: 100%;
	}
	h5 {
		display: block;
		margin: 0 0 1rem;
		line-height: 1.2;
		font-size: 1.25rem;

		small {
			display: block;
			color: #007660;
			font-size: 0.8rem;
			margin-top: 0.25rem;
		}
	}
</style>
