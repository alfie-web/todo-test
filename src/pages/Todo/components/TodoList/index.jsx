import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../../../../components/Preloader'

import { fetchTasks } from '../../../../store/actions/tasks'
import TodoItem from '../TodoItem'



const TodoList = () => {
	console.log('RENDER')
	const dispatch = useDispatch()
	const tasks = useSelector(state => state.tasks.tasks)
	const isFetching = useSelector(state => state.tasks.isFetching)

	useEffect(() => {
		dispatch(fetchTasks())
	}, [dispatch])

   return (
		<>
			<div className="Todo__list">
				<div className="Todo__list-header">
					<div className="Todo__item-id">Id</div>
					<div className="Todo__item-username">Имя пользователя</div>
					<div className="Todo__item-email">E-mail</div>
					<div className="Todo__item-text">Текст</div>
					<div className="Todo__item-status">Статус</div>
				</div>

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
			</div>
		</>
	)
}

export default TodoList
