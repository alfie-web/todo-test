import { SET_ITEMS, SET_IS_FETCHING } from '../types/tasks'

const initialState = {
	tasks: [],
	isFetching: false
}

const changeState = (state, prop, value) => ({
	...state,
	[prop]: value
})

const tasksReducer = (state = initialState, { type, payload }) => {
	switch(type) {
		case SET_ITEMS:
			return changeState(state, 'tasks', payload)

		case SET_IS_FETCHING:
			return changeState(state, 'isFetching', payload)

		default: return state
	}
}

export default tasksReducer