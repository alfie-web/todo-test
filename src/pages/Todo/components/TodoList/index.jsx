import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTasks } from '../../../../store/actions/tasks'
import TodoItem from '../TodoItem'

const TodoList = () => {
	const dispatch = useDispatch()
	const tasks = useSelector(state => state.tasks.tasks)

	useEffect(() => {
		dispatch(fetchTasks())
	}, [dispatch])

   return (
		<table className="Todo__list">
			<thead className="Todo__list-header">
				<tr>
					<th className="Todo__item-id">Id</th>
					<th className="Todo__item-username">Имя пользователя</th>
					<th className="Todo__item-email">E-mail</th>
					<th className="Todo__item-text">Текст</th>
					<th className="Todo__item-status">Статус</th>
				</tr>
			</thead>

			<tbody>
				{tasks.length 
					? tasks.map(item => (
						<TodoItem 
							key={item.id}
							{...item}
						/>
					))
					: null
				}
			</tbody>
		</table>
	)
}

export default TodoList
