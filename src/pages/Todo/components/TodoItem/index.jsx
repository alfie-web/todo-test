import React from 'react'

const TodoItem = ({ id, username, email, text, status }) => {
	return (
		<div className="Todo__item">
			<div className="Todo__item-id">{id}</div>
			<div className="Todo__item-username">{username}</div>
			<div className="Todo__item-email">{email}</div>
			<div className="Todo__item-text">{text}</div>
			<div className="Todo__item-status">{status}</div>
		</div>
	)
}

export default TodoItem
