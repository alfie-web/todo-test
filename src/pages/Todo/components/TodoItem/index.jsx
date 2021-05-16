import { useState, memo } from 'react'
import { useDispatch } from 'react-redux'

import { editTask } from '../../../../store/actions/tasks'
import EditTextForm from './components/EditTextForm'
import EditStatusCheckbox from './components/EditStatusCheckbox'

const TodoItem = ({ id, username, email, text, status }) => {
   const dispatch = useDispatch()
   const [isEdit, setIsEdit] = useState(false)

   const editHandler = (editedData) => {
      let newStatus = status

      if (editedData.prop === 'text') {
         if (status === 0) newStatus = 1
         if (status === 10) newStatus = 11

         editedData.value !== text &&
            dispatch(
               editTask({ id, text: editedData.value, status: newStatus })
            )

         setIsEdit(false)
      } else {
         if (status === 0) newStatus = 10
         if (status === 10) newStatus = 0
         if (status === 1) newStatus = 11
         if (status === 11) newStatus = 1

         dispatch(editTask({ id, text, status: newStatus }))
      }
   }

   const handleEditMode = () => setIsEdit(true)

   return (
      <div className="Todo__item">
         <div className="Todo__item-id">{id}</div>

         <div className="Todo__item-center">
            {!isEdit ? (
               <>
                  <div className="Todo__item-userinfo">
                     <span>{username}</span>
                     <span>({email})</span>
                     <span>
                        {status === 1 || status === 11
                           ? 'Отредактировано администратором'
                           : ''}
                     </span>
                  </div>
                  <div
                     className="Todo__item-text"
                     onDoubleClick={handleEditMode}
                  >
                     {text}
                  </div>
               </>
            ) : (
               <EditTextForm text={text} onBlur={editHandler} />
            )}
         </div>

         <div className="Todo__item-status">
            <EditStatusCheckbox status={status} onChange={editHandler} />
         </div>
      </div>
   )
}

export default memo(TodoItem)
