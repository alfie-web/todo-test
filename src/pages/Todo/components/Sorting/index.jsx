import { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'

import { setSortField } from '../../../../store/actions/tasks'
import Select from '../../../../components/Select'

const Sorting = () => {
	const dispatch = useDispatch()
	const sort_field = useSelector(state => state.tasks.sort_field)
	// const [value, setValue] = useState(page)
	// const history = useHistory()

	const onSelect = (data) => {
		dispatch(setSortField(data))
		// console.log(data)
	}

	return (
		<div className="Todo__sorting">
			<div className="Todo__sorting-select">
				<label>Сортировать по: </label>

				<Select 
					optionsData={[
						{title: 'id', value: 'id'},
						{title: 'Имя пользователя', value: 'username'},
						{title: 'E-mail', value: 'email'},
						{title: 'Статус', value: 'status'},
					]}
					onSelect={onSelect}
					defaultValue={sort_field}
				/>
			</div>

			<div className="Todo__sorting-select">
				<label>Направление: </label>
				<Select 
					optionsData={[
						{title: 'Сначала новые', value: 'desc'},
						{title: 'Сначала старые', value: 'asc'},
					]}
				/>
			</div>
		</div>
	)
}

export default memo(Sorting)
