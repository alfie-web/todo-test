import { memo } from 'react'

import Checkbox from '../../../../../components/Checkbox'

const EditStatusCheckbox = memo(({ onChange, status }) => {
	const onChangeHandler = (val) => {
		// onChange({ prop: 'status', value: val })
		onChange({ prop: 'status' })
	}

	return (
		<Checkbox 
			checked={(status === 0 || status === 1) ? false : true}
			onChange={onChangeHandler}
		/>
	)
})

export default EditStatusCheckbox