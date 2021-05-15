import usersAPI from '../../api/users'
import { SET_IS_AUTH, SET_IS_FETCHING } from '../types/users'

const setIsAuth = payload => ({
	type: SET_IS_AUTH,
	payload
})

const setIsFetching = payload => ({
	type: SET_IS_FETCHING,
	payload
})

export const login = (formData) => async dispatch => {
	dispatch(setIsFetching(true))
	try {
		const { data } = await usersAPI.login(formData)
		
		if (data.status === 'ok') {
			const token = data.message.token
			
			localStorage.setItem('token', token)	// это плохо, но вариантов мало
			dispatch(setIsAuth(true))
		}
		
	} catch (error) {
		
		
	} finally {
		dispatch(setIsFetching(false))
	}
}