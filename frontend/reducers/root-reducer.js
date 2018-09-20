import { REQUEST_RECIPES, RECEIVE_RECIPES } from '../actions';

const initState = {
	isFetching: false,
	recipes: []
}

const rootReducer = (state = initState, action) => {
	switch(action.type) {
		case REQUEST_RECIPES:
			return {
				...state,
				isFetching: true
			};
		case RECEIVE_RECIPES:
			return {
				...state,
				isFetching: false,
				recipes: action.recipes
			};
		default:
			return state;
	}
}

export default rootReducer;