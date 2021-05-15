import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../../../../components/Preloader'

import { fetchTasks } from '../../../../store/actions/tasks'
import TodoItem from '../TodoItem'
import TodoListHeader from '../TodoListHeader'
import Pagination from '../Pagination'
import NewTaskForm from '../NewTaskForm'


const TodoList = () => {
	// console.log('RENDER')
	const history = useHistory()
	const dispatch = useDispatch()

	const tasks = useSelector(state => state.tasks.tasks)
	const page = useSelector(state => state.tasks.page)
	const sort_field = useSelector(state => state.tasks.sort_field)
	const sort_direction = useSelector(state => state.tasks.sort_direction)
	const isFetching = useSelector(state => state.tasks.isFetching)

	useEffect(() => {
		dispatch(fetchTasks())
		history.push(`/?page=${page}&sort_field=${sort_field}&sort_direction=${sort_direction}`)
	}, [dispatch, history, page, sort_field, sort_direction])

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

				<NewTaskForm />

				<Pagination />
			</div>
		</>
	)
}

export default TodoList
