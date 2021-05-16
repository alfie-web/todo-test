import { memo } from 'react'

const TodoListHeader = () => {
   return (
      <div className="Todo__list-header">
         <div className="Todo__item-id">Id</div>

         <div className="Todo__item-center">
            <div className="Todo__item-id">Текст</div>
         </div>

         <div className="Todo__item-status">Статус</div>
      </div>
   )
}

export default memo(TodoListHeader)
