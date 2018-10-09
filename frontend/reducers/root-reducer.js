import {
	SET_FETCHING, SET_RECIPES, SET_EDIT_MODE,
	SET_DRAFT_RECIPE, SET_DRAFT_TITLE, SET_DRAFT_TEXT,
	ADD_DRAFT_TAG, DELETE_DRAFT_TAG, SET_FILTER_TEXT,
	ADD_EMPTY_RECIPE, SHOW_DISCARD_DIALOG
} from '../actions';

const initState = {
	fetching: false,
	editing: false,
	discardDialogOpen: false,
	saveDialogOpen: false,
	recipes: [],
	filter: ""
}

const rootReducer = (state = initState, action) => {
	switch(action.type) {
		case SET_FETCHING:
			return {
				...state,
				fetching: action.bool
			}
		case SET_RECIPES:
			return {
				...state,
				recipes: action.recipes
			};
		case ADD_EMPTY_RECIPE:
			return {
				...state,
				recipes: [...state.recipes, {_id:action.id,title:"",text:"",tags:[]}]
			}
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
		case SET_EDIT_MODE:
			return {
				...state,
				editing: action.bool
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
		case SET_FILTER_TEXT:
			return {
				...state,
				filter: action.text
			}
		case SHOW_DISCARD_DIALOG:
			return {
				...state,
				discardDialogOpen: action.bool
			}
		default:
			return state;
	}
}

export default rootReducer;