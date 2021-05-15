import React from 'react'

import TodoList from './components/TodoList'
import Sorting from './components/Sorting'
import './Todo.sass'

const TodoPage = () => {
	return (
		<main className="Todo page">
			<div className="container">
				<div className="box">
					<h1>Список задач</h1>
					<Sorting />
				</div>

				<div className="Todo__items">
					<TodoList />
				</div>
			</div>
		</main>
	)
}

export default TodoPage
