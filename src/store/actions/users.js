import actionCreator from '../../helpers/actionCreator'
import usersAPI from '../../api/users'
import { SET_IS_AUTH, SET_IS_FETCHING } from '../types/users'

const setIsAuth = payload => actionCreator(SET_IS_AUTH, payload)
const setIsFetching = payload => actionCreator(SET_IS_FETCHING, payload)

export const login = (formData) => async dispatch => {
	dispatch(setIsFetching(true))
	try {
		const { data } = await usersAPI.login(formData)
		
		if (data.status !== 'ok') return window.flash(data.message.password, 'error')
		
		const token = data.message.token
		localStorage.setItem('token', token)	// это плохо, но вариантов мало
		window.flash('Вы успешно авторизованы!', 'success')
		dispatch(setIsAuth(true))
		
	} catch (error) {
		console.error(error)
	} finally {
		dispatch(setIsFetching(false))
	}
}