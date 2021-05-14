import React from 'react'

const TodoItem = ({ id, username, email, text, status }) => {
	return (
		<tr className="Todo__item">
			<td className="Todo__item-id">{id}</td>
			<td className="Todo__item-username">{username}</td>
			<td className="Todo__item-email">{email}</td>
			<td className="Todo__item-text">{text}</td>
			<td className="Todo__item-status">{status}</td>
		</tr>
	)
}

export default TodoItem
