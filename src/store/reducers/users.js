
import { SET_IS_AUTH, SET_IS_FETCHING } from '../types/users'

const initialState = {
	isAuth: !!window.localStorage.getItem('token') ?? false,
	isFetching: false
}

const usersReducer = (state = initialState, { type, payload }) => {
	switch(type) {
		case SET_IS_AUTH:
			return {
				...state,
				isAuth: payload
			}

		case SET_IS_FETCHING:
			return {
				...state,
				isFetching: payload
			}

		default: return state
	}
}

export default usersReducer