import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

export const useMovieStore = defineStore('movieStore', () => {
	const movies = ref([]);
	const activeTab = ref(2);

	const moviesLocalStorage = localStorage.getItem('movies');
	if (moviesLocalStorage) {
		movies.value = JSON.parse(moviesLocalStorage);
	}

	const watchedList = computed(() => {
		return movies.value.filter((el) => el.isWatched);
	});

	const moviesCount = computed(() => movies.value.length);

	const setActiveTab = (tab) => {
		activeTab.value = tab;
	};

	const toggleWatched = (id) => {
		const idx = movies.value.findIndex((el) => el.imdbID === id);
		movies.value[idx].isWatched = !movies.value[idx].isWatched;
	};

	const deleteMovie = (id) => {
		movies.value = movies.value.filter((el) => el.imdbID !== id);
	};

	watch(
		() => movies,
		(state) => {
			localStorage.setItem('movies', JSON.stringify(movies.value));
		},
		{ deep: true }
	);

	return {
		movies,
		activeTab,
		watchedList,
		moviesCount,
		setActiveTab,
		toggleWatched,
		deleteMovie,
	};
});
