import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { editTask } from '../../../../store/actions/tasks'
import Input from '../../../../components/Input'

const TodoItemEditForm = ({ onBlur, text }) => {
	const [value, setValue] = useState(text)

	const blurHandler = () => {
		if (value === text) return onBlur(null)
		onBlur({ prop: 'text', value })
	}

	const onChange = (e) => {
		setValue(e.target.value)
	}

	return (
		<Input 
			className="Todo__item-editInput"
			placeholder="Текст задачи"
			value={value}
			onChange={onChange}
			onBlur={blurHandler}
			autoFocus
		/>
	)
}

const TodoItem = ({ id, username, email, text, status }) => {
	const dispatch = useDispatch()
	const [isEdit, setIsEdit] = useState(false)

	const editHandler = (data) => {
		if (data) dispatch(editTask({ id, ...data }))

		setIsEdit(false)
	}

	const handleEditMode = () => setIsEdit(true)

	return (
		<div className="Todo__item">
			<div className="Todo__item-id">{id}</div>

			<div className="Todo__item-center">
			{ !isEdit 
				? (
					<>
						<span className="Todo__item-userinfo">{username} ({email})</span>
						<div className="Todo__item-text" onDoubleClick={handleEditMode}>{text}</div>
					</>
				) : (
					<TodoItemEditForm 
						onBlur={editHandler}
						text={text}
					/>
					)
				}
			</div>

			<div className="Todo__item-status">{status}</div>
		</div>
	)
}

export default TodoItem
