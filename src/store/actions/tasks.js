import tasksAPI from '../../api/tasks'
import { SET_ITEMS, SET_IS_FETCHING } from '../types/tasks'

const setItems = (tasks) => ({
	type: SET_ITEMS,
	payload: tasks
})

const setIsFetching = (isFetching) => ({
	type: SET_IS_FETCHING,
	payload: isFetching
})


export const fetchTasks = () => async dispatch => {
	const page = 1, sort_direction = 'desc', sort_field = 'id'

	try {
		const { data } = await tasksAPI.getAll({ page, sort_direction, sort_field })

		console.log(data)
		
	} catch (error) {
		console.error(error)
	}
}