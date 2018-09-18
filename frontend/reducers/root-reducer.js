const initState = {
	recipes: []
}

const rootReducer = (state = initState, action) => {
	if (action.type === 'SET_RECIPES') {
		return {
			...state,
			recipes: action.recipes
		}
	} else {
		return state;
	}
}

export default rootReducer;