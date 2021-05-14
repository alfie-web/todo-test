import React from 'react'

import TodoList from './components/TodoList'
import './Todo.sass'

const TodoPage = () => {
	return (
		<main className="Todo page">
			<div className="container">
				<h1>Список задач</h1>

				<div className="Todo__items">
					<TodoList />
				</div>
			</div>
		</main>
	)
}

export default TodoPage
