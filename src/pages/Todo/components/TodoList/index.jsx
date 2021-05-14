import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchTasks } from '../../../../store/actions/tasks'

const TodoList = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTasks())
	}, [dispatch])

   return (
		<div className="Todo__items">
			итемы
		</div>
	)
}

export default TodoList
