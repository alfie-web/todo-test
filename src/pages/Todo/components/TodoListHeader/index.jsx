import { memo } from 'react'

const TodoListHeader = () => {

	return (
		<div className="Todo__list-header">
			<div className="Todo__item-id">Id</div>
			<div className="Todo__item-username">Имя пользователя</div>
			<div className="Todo__item-email">E-mail</div>
			<div className="Todo__item-text">Текст</div>
			<div className="Todo__item-status">Статус</div>
		</div>
	)
}

export default memo(TodoListHeader)
