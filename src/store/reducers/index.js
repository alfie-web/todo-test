import { combineReducers } from "redux"

import usersReducer from './users'
import tasksReducer from './tasks'

const rootReducer = combineReducers({
	users: usersReducer,
	tasks: tasksReducer,
})

export default rootReducer