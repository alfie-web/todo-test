import { memo, useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setPage } from '../../../../store/actions/tasks'
import Input from '../../../../components/Input'

const Pagination = () => {
   const dispatch = useDispatch()
   const page = useSelector((state) => state.tasks.page)
   const total_task_count = useSelector((state) => state.tasks.total_task_count)
   const [value, setValue] = useState(page)

   const onChange = (e) => {
      if (+e.target.value <= 0) return // запрещает ввод отрицательных чисел
      setValue(e.target.value)
   }

   const onPageSelect = useCallback((e) => {
		if (e.code !== 'Enter') return

		dispatch(setPage(+value))
	}, [dispatch, value])

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

         {total_task_count && (
            <span>
               {page} / {Math.ceil(+total_task_count / 3)}
            </span>
         )}
      </div>
   )
}

export default memo(Pagination)
