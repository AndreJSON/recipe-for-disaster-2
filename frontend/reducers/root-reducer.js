import {
	REQUEST_RECIPES, RECEIVE_RECIPES, TOGGLE_EDIT_MODE,
	SET_DRAFT_RECIPE, SET_DRAFT_TITLE, SET_DRAFT_TEXT,
	ADD_DRAFT_TAG, DELETE_DRAFT_TAG
} from '../actions';

const initState = {
	fetching: false,
	editing: false,
	recipes: []
}

const rootReducer = (state = initState, action) => {
	switch(action.type) {
		case REQUEST_RECIPES:
			return {
				...state,
				fetching: true
			};
		case RECEIVE_RECIPES:
			return {
				...state,
				fetching: false,
				recipes: action.recipes
			};
		case SET_DRAFT_RECIPE:
			return {
				...state,
				draftRecipe: state.recipes.find((x) => x._id === action.id)
			};
		case SET_DRAFT_TITLE:
			return {
				...state,
				draftRecipe: {
					...state.draftRecipe,
					title: action.title
				}
			};
		case SET_DRAFT_TEXT:
			return {
				...state,
				draftRecipe: {
					...state.draftRecipe,
					text: action.text
				}
			};
		case TOGGLE_EDIT_MODE:
			return {
				...state,
				editing: action.value
			};
		case ADD_DRAFT_TAG:
			return {
				...state,
				draftRecipe: {
					...state.draftRecipe,
					tags: [...state.draftRecipe.tags, action.tag]
				}
			};
		case DELETE_DRAFT_TAG:
			return {
				...state,
				draftRecipe: {
					...state.draftRecipe,
					tags: state.draftRecipe.tags.filter(tag => {
						return tag !== action.tag
					})
				}
			};
		default:
			return state;
	}
}

export default rootReducer;