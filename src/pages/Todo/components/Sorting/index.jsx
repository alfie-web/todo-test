import { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setSortField, setSortDirection } from '../../../../store/actions/tasks'
import Select from '../../../../components/Select'

const Sorting = () => {
   const dispatch = useDispatch()
   const sort_field = useSelector((state) => state.tasks.sort_field)
   const sort_direction = useSelector((state) => state.tasks.sort_direction)

   const onSelectField = (data) => {
      dispatch(setSortField(data))
   }

   const onSelectDirection = (data) => {
      // dispatch(sortDirection(data))
      dispatch(setSortDirection(data))
   }

   return (
      <div className="Todo__sorting">
         <div className="Todo__sorting-select">
            <label>Сортировать по: </label>

            <Select
               optionsData={[
                  { title: 'id', value: 'id' },
                  { title: 'Имя пользователя', value: 'username' },
                  { title: 'E-mail', value: 'email' },
                  { title: 'Статус', value: 'status' },
               ]}
               onSelect={onSelectField}
               defaultValue={sort_field}
            />
         </div>

         <div className="Todo__sorting-select">
            <label>Направление: </label>
            <Select
               optionsData={[
                  { title: 'По убыванию', value: 'desc' },
                  { title: 'По возрастанию', value: 'asc' },
               ]}
               onSelect={onSelectDirection}
               defaultValue={sort_direction}
            />
         </div>
      </div>
   )
}

export default memo(Sorting)
