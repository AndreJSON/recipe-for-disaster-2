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

export function createRecipe() {
	return (dispatch) => {
		return axios.get('/api/id')
		.then((res) => {
			dispatch(addEmptyRecipe(res.data.id));
			dispatch(setDraftRecipe(res.data.id));
			dispatch(setEditMode(true));

		})
		.catch((err) => {
			console.log(err);
		})
	}
}

export const ADD_EMPTY_RECIPE = "ADD_EMPTY_RECIPE";
function addEmptyRecipe(id) {
	return {
		type: ADD_EMPTY_RECIPE,
		id: id
	}
}

export function editRecipe(id) {
	return (dispatch) => {
		dispatch(setDraftRecipe(id));
		dispatch(setEditMode(true));
	}
}

export const SET_DRAFT_RECIPE = "SET_DRAFT_RECIPE";
export function setDraftRecipe(id) {
	return {
		type: SET_DRAFT_RECIPE,
		id: id
	}
}

export const SET_DRAFT_TITLE = "SET_DRAFT_TITLE";
export function setDraftTitle(title) {
	return {
		type: SET_DRAFT_TITLE,
		title: title
	}
}

export const SET_DRAFT_TEXT = "SET_DRAFT_TEXT";
export function setDraftText(text) {
	return {
		type: SET_DRAFT_TEXT,
		text: text
	}
}

export const SET_EDIT_MODE = "SET_EDIT_MODE";
function setEditMode(value) {
	return {
		type: SET_EDIT_MODE,
		value: value
	}
}

export const ADD_DRAFT_TAG = "ADD_DRAFT_TAG";
export function addDraftTag(tag) {
	return {
		type: ADD_DRAFT_TAG,
		tag: tag
	}
}

export const DELETE_DRAFT_TAG = "DELETE_DRAFT_TAG";
export function deleteDraftTag(tag) {
	return {
		type: DELETE_DRAFT_TAG,
		tag: tag
	}
}

export const SET_FILTER_TEXT = "SET_FILTER_TEXT";
export function setFilterText(text) {
	return {
		type: SET_FILTER_TEXT,
		text: text
	}
}