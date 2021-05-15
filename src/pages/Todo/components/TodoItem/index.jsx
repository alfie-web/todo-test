import { useState, memo } from 'react'
import { useDispatch } from 'react-redux'

import { editTask } from '../../../../store/actions/tasks'
import Input from '../../../../components/Input'
import Checkbox from '../../../../components/Checkbox'

const EditTextForm = memo(({ onBlur, text }) => {
	const [value, setValue] = useState(String(text))

	const blurHandler = () => {
		if (value === text) return onBlur(null)
		onBlur({ prop: 'text', value })
	}

	const onChange = (e) => {
		// console.log(e.target.value)
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
})

const EditStatusCheckbox = memo(({ onChange, status }) => {
	const onChangeHandler = (val) => {
		onChange({ prop: 'status', value: val ? 10 : 0 })
	}

	return (
		<Checkbox 
			checked={status}
			onChange={onChangeHandler}
		/>
	)
})

const TodoItem = ({ id, username, email, text, status }) => {
	const dispatch = useDispatch()
	const [isEdit, setIsEdit] = useState(false)

	const editHandler = (data) => {
		data && dispatch(editTask({ id, ...data }))

		isEdit && setIsEdit(false)
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
					<EditTextForm 
						onBlur={editHandler}
						text={text}
					/>
				)
			}
			</div>

			<div className="Todo__item-status">
				<EditStatusCheckbox
					status={status}
					onChange={editHandler}
				/>
			</div>
		</div>
	)
}

export default memo(TodoItem)
