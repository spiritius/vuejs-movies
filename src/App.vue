<template>
	<TransitionGroup name="label">
		<Label v-if="searchStore.labelShow">{{ searchStore.labelText }}</Label>
	</TransitionGroup>
	<header class="header">
		<h2>🍿 My fav movies</h2>
		<p>vue.js + pinia practice</p>
		<div class="row">
			<button
				:class="['btn', { btn_active: movieStore.activeTab === 1 }]"
				@click="movieStore.setActiveTab(1)">
				Favorites
			</button>
			<button
				:class="['btn', { btn_active: movieStore.activeTab === 2 }]"
				@click="movieStore.setActiveTab(2)">
				Search
			</button>
		</div>
	</header>
	<main>
		<div
			class="container movies"
			v-if="movieStore.activeTab === 1">
			<div>
				<h3>
					Watched Movies ({{ movieStore.watchedList.length || 0 }})
				</h3>
				<Movie
					v-for="movie of movieStore.watchedList"
					:key="movie.id"
					:movie="movie" />
			</div>
			<h3>Movies List ({{ movieStore.moviesCount }})</h3>
			<Movie
				v-for="movie of movieStore.movies"
				:key="movie.id"
				:movie="movie" />
		</div>
		<div
			class="container search"
			v-else>
			<Search />
		</div>
	</main>
</template>

<script setup>
	import Movie from './components/Movie.vue';
	import Search from './components/Search.vue';
	import Label from './components/Label.vue';
	import { useMovieStore } from './stores/MovieStore';
	import { useSearchStore } from './stores/SearchStore';

	const movieStore = useMovieStore();
	const searchStore = useSearchStore();
</script>

<style lang="scss">
	.header {
		padding: 1.5rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;

		.btn:not(:first-child) {
			margin-left: 1rem;
		}
	}
	p {
		margin: 0 0 1rem;
	}
	h2,
	h3 {
		margin: 0 0 1rem;
	}
	.btn {
		border-radius: 3px;
		background-color: #faf1cb;
		color: #000;
		font-size: 0.8rem;
		line-height: 1;
		font-weight: bold;
		padding: 0.5rem 1rem;
		border: none;
		transition: all 0.25s ease;
		cursor: pointer;

		&_active {
			background-color: #b1dd25;
		}
	}
	.label-enter-active,
	.label-leave-active {
		transition: all 0.5s ease;
	}
	.label-enter-from {
		opacity: 0;
		transform: translatey(30px);
	}
	.label-leave-to {
		opacity: 0;
		transform: translatey(-30px);
	}
</style>
