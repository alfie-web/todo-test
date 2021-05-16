import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import Input from '../../../../../components/Input'

const EditTextForm = memo(({ onBlur, text }) => {
   const isFetching = useSelector((state) => state.tasks.isFetching)
   const [value, setValue] = useState(String(text))

   const onBlurHandler = () => {
      onBlur({ prop: 'text', value })
   }

   const onChangeHandler = (e) => {
      setValue(e.target.value)
   }

   return (
      !isFetching && (
         <Input
            className="Todo__item-editInput"
            placeholder="Текст задачи"
            value={value}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            autoFocus
         />
      )
   )
})

export default EditTextForm
