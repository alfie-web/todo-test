import queryString from 'query-string'
import { SET_ITEMS, SET_PAGE, SET_IS_FETCHING, SET_SORT_FIELD, SET_SORT_DIRECTION, ADD_NEW_ITEM } from '../types/tasks'

const urlParams = queryString.parse(window.location.search)

const initialState = {
	tasks: [],
	total_task_count: null,
	isFetching: false,
	page: urlParams.page ? +urlParams.page : 1,
	sort_direction: urlParams.sort_direction ?? 'asc',
	sort_field: urlParams.sort_field ?? 'id',
}

const changeState = (state, prop, value) => ({
	...state,
	[prop]: value
})

const tasksReducer = (state = initialState, { type, payload }) => {
	switch(type) {
		case SET_ITEMS:
			return {
				...state,
				tasks: payload.tasks,
				total_task_count: payload.total_task_count
			}

		case ADD_NEW_ITEM:
			return {
				...state,
				tasks: [...state.tasks, payload],
				total_task_count: +state.total_task_count + 1
			}

		case SET_PAGE:
			return changeState(state, 'page', payload)

		case SET_SORT_FIELD:
			return changeState(state, 'sort_field', payload)
			
		case SET_SORT_DIRECTION:
			return changeState(state, 'sort_direction', payload)

		case SET_IS_FETCHING:
			return changeState(state, 'isFetching', payload)

		default: return state
	}
}

export default tasksReducer