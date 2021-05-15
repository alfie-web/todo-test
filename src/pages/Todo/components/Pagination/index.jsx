import { memo, useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { setPage } from '../../../../store/actions/tasks'
import Input from '../../../../components/Input'

const Pagination = () => {
	const dispatch = useDispatch()
	const page = useSelector(state => state.tasks.page)
	const [value, setValue] = useState(page)
	const history = useHistory()

	const onChange = (e) => {
		if (+e.target.value <= 0) return	// запрещает ввод отрицательных чисел
		setValue(e.target.value)
	}

	const onPageSelect = useCallback((e) => {
		if (e.code !== 'Enter') return 

		dispatch(setPage(+value))
		history.push(`/?page=${value}`)

	}, [dispatch, value, history])

	useEffect(() => {
		window.addEventListener('keypress', onPageSelect)

		return () => {
			window.removeEventListener('keypress', onPageSelect)
		}
	}, [onPageSelect])

	return (
		<div className="Todo__pagination" title="Для перехода нажмите Enter">
			<label htmlFor="page">Перейти на страницу:</label>
			<Input
				type="number"
				value={value}
				onChange={onChange}
				minVal={1}
				idAttr="page"
			/>
		</div>
	)
}

export default memo(Pagination)
