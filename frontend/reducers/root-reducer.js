import { REQUEST_RECIPES, RECEIVE_RECIPES, TOGGLE_EDIT_MODE } from '../actions';

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
		case TOGGLE_EDIT_MODE:
			return {
				...state,
				editing: action.value
			};
		default:
			return state;
	}
}

export default rootReducer;