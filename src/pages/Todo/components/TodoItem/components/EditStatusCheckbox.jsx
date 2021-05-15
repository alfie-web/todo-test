import { memo } from 'react'
import { useSelector } from 'react-redux'
import Checkbox from '../../../../../components/Checkbox'

const EditStatusCheckbox = memo(({ onChange, status }) => {
	const isFetching = useSelector(state => state.tasks.isFetching)

	const onChangeHandler = (val) => {
		// onChange({ prop: 'status', value: val })
		onChange({ prop: 'status' })
	}

	return (
		<Checkbox 
			checked={(status === 0 || status === 1) ? false : true}
			onChange={onChangeHandler}
			disabled={isFetching}
		/>
	)
})

export default EditStatusCheckbox