import actionCreator from '../../helpers/actionCreator'
import tasksAPI from '../../api/tasks'
import { SET_ITEMS, SET_PAGE, SET_IS_FETCHING, SET_SORT_FIELD, SET_SORT_DIRECTION, SET_EDIT_TASK } from '../types/tasks'

export const setItems = payload => actionCreator(SET_ITEMS, payload)

export const setPage = payload => actionCreator(SET_PAGE, payload)
export const setSortField = payload => actionCreator(SET_SORT_FIELD, payload)
export const setSortDirection = payload => actionCreator(SET_SORT_DIRECTION, payload)

const setEditTask = payload => actionCreator(SET_EDIT_TASK, payload)
const setIsFetching = (payload) => actionCreator(SET_IS_FETCHING, payload)

export const fetchTasks = () => async (dispatch, getState) => {
   const { tasks: { page, sort_direction, sort_field } } = getState()

   dispatch(setIsFetching(true))

   try {
      const { data } = await tasksAPI.getAll({
         page,
         sort_direction,
         sort_field,
      })

      if (data.status === 'ok') {
         dispatch(
            setItems({
               tasks: data.message.tasks,
               total_task_count: data.message.total_task_count,
            })
         )
      }
   } catch (error) {
      console.error(error)
   } finally {
      dispatch(setIsFetching(false))
   }
}

// Если нужно в зависимости от сортировки перейти на первую или последнюю страницу
// export const sortDirection = (direction) => async (dispatch, getState) => {
// 	const { tasks: { total_task_count } } = getState()

// 	setSortDirection(direction)
// 	if (direction === 'desc') {
// 		dispatch(setPage(1))
// 	} else {
// 		const lastPage = Math.ceil(+total_task_count / 3)
// 		dispatch(setPage(lastPage))
// 	}
// }

export const createNewTask = (formData) => async (dispatch) => {
   dispatch(setIsFetching(true))
   try {
      const { data } = await tasksAPI.create(formData)

      if (data.status === 'ok') {
         window.flash('Задача добавлена!', 'success')
         dispatch(fetchTasks())
      }
   } catch (error) {
      console.error(error)
   } finally {
      dispatch(setIsFetching(false))
   }
} 

export const editTask = (formData) => async (dispatch) => {
   dispatch(setIsFetching(true))
   try {
      const { data } = await tasksAPI.edit(formData)

      if (data.status !== 'ok') return window.flash(data.message.token, 'error')

      window.flash('Задача изменена!', 'success')
      dispatch(setEditTask(formData))
   } catch (error) {
      console.error(error)
   } finally {
      dispatch(setIsFetching(false))
   }
} 