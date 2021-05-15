import { memo, useState } from 'react'
import Input from '../../../../../components/Input'

const EditTextForm = memo(({ onBlur, text }) => {
	const [value, setValue] = useState(String(text))

	const onBlurHandler = () => {
		onBlur({ prop: 'text', value })
	}

	const onChangeHandler = (e) => {
		setValue(e.target.value)
	}

	return (
		<Input 
			className="Todo__item-editInput"
			placeholder="Текст задачи"
			value={value}
			onChange={onChangeHandler}
			onBlur={onBlurHandler}
			autoFocus
		/>
	)
})

export default EditTextForm