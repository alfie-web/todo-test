import tasksAPI from '../../api/tasks'
import { SET_ITEMS, SET_PAGE, SET_IS_FETCHING, SET_SORT_FIELD } from '../types/tasks'

const setItems = payload => ({
	type: SET_ITEMS,
	payload
})

export const setPage = payload => ({
	type: SET_PAGE,
	payload
})

export const setSortField = payload => ({
	type: SET_SORT_FIELD,
	payload
})

const setIsFetching = (isFetching) => ({
	type: SET_IS_FETCHING,
	payload: isFetching
})


export const fetchTasks = () => async (dispatch, getState) => {
	const { tasks: { page, sort_direction, sort_field } } = getState()

	dispatch(setIsFetching(true))

	try {
		const { data } = await tasksAPI.getAll({ page, sort_direction, sort_field })

		if (data.status === 'ok') {
			dispatch(setItems({
				tasks: data.message.tasks,
				total_task_count: data.message.total_task_count,
			}))

			// dispatch(setPage(page + 1))
		}
		
	} catch (error) {
		console.error(error)
		
	} finally {
		dispatch(setIsFetching(false))
	}
}