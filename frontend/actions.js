import axios from 'axios';

export const REQUEST_RECIPES = "REQUEST_RECIPES";
function requestRecipes() {
	return {
		type: REQUEST_RECIPES
	}
}

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
function receiveRecipes(recipes) {
	return {
		type: RECEIVE_RECIPES,
		recipes: recipes
	}
}

export function fetchRecipes() {
	return (dispatch) => {
		dispatch(requestRecipes());
		return axios.get('/api/recipes')
		.then((res) => {
			dispatch(receiveRecipes(res.data.recipes));
		})
		.catch((err) => {
			console.log(err);
		})
	}
}