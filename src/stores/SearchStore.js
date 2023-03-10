import { defineStore } from 'pinia';
import { useMovieStore } from './MovieStore';
import { ref } from 'vue';

const API_URL = 'https://www.omdbapi.com/?apikey=3857c36e&s=';

export const useSearchStore = defineStore('searchStore', () => {
	const movies = ref([]);
	const loading = ref(false);
	const labelShow = ref(false);
	const labelText = ref('');

	const getMovies = async (search) => {
		loading.value = true;
		const result = await fetch(`${API_URL}${search}`);
		const data = await result.json();
		movies.value = data.Search;
		loading.value = false;
	};

	const addToMyMovies = (object) => {
		const movieStore = useMovieStore();

		const idx = movieStore.movies.findIndex(
			(el) => el.imdbID === object.imdbID
		);
		if (idx < 0) {
			movieStore.movies.push({ ...object, isWatched: false });
			labelText.value = 'Added to Favorites!';
		} else {
			labelText.value = 'Already in Favorites';
		}
		setTimeout(() => {
			labelShow.value = false;
		}, 2500);
		labelShow.value = true;
	};

	return {
		loading,
		movies,
		labelShow,
		labelText,
		getMovies,
		addToMyMovies,
	};
});
