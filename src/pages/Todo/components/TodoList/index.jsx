import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../../../../components/Preloader'

import { fetchTasks } from '../../../../store/actions/tasks'
import TodoItem from '../TodoItem'
import TodoListHeader from '../TodoListHeader'
import Pagination from '../Pagination'


const TodoList = () => {
	// console.log('RENDER')
	const history = useHistory()
	const dispatch = useDispatch()
	const page = useSelector(state => state.tasks.page)
	const sort_field = useSelector(state => state.tasks.sort_field)
	const tasks = useSelector(state => state.tasks.tasks)
	const isFetching = useSelector(state => state.tasks.isFetching)

	useEffect(() => {
		dispatch(fetchTasks())
		history.push(`/?page=${page}&sort_field=${sort_field}`)
	}, [dispatch, history, page, sort_field])

   return (
		<>
			<div className="Todo__list">
				<TodoListHeader />

				<div className="Todo__list-items">
					{ isFetching && <Preloader /> }

					{tasks.length 
						? tasks.map(item => (
							<TodoItem 
								key={item.id}
								{...item}
							/>
						))
						: null
					}
				</div>

				<Pagination />
			</div>
		</>
	)
}

export default TodoList
