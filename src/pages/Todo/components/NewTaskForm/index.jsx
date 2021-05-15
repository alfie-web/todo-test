import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { createNewTask } from '../../../../store/actions/tasks'
import Button from '../../../../components/Button'

const validationSchema = yup.object().shape({
   username: yup.string().required().min(3).max(20),
   text: yup.string().required().min(3).max(50),
   email: yup.string().required().email(),
})

const NewTaskFormBtn = () => {
	const isFetching = useSelector(state => state.tasks.isFetching)

	return (
		<Button 
			text="Создать"
			variant="black"
			type="submit"
			disabled={isFetching}
		/>
	)
}

const NewTaskForm = () => {
	console.log('RENDERS')
	const dispatch = useDispatch()
	const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(validationSchema),
   })

   const onSubmit = (data) => {
      dispatch(createNewTask(data))
   }

	return (
		<form className="Todo__newTaskForm" onSubmit={handleSubmit(onSubmit)}>
			<div className="Todo__newTaskForm-top">
				<div className="Todo__newTaskForm-input Input">
					<input
						name="text"
						placeholder="Новая задача"
						defaultValue=""
						{...register("text")}
					/>

					{ errors.text && <div className="Input__error-msg">
						Поле обязательно
					</div> }
				</div>
			</div>

			<div className="Todo__newTaskForm-bottom">
				<div className="Todo__newTaskForm-input Input">
					<input
						name="username"
						placeholder="Ваше имя"
						defaultValue=""
						{...register("username")}
					/>

					{ errors.username && <div className="Input__error-msg">
						Поле обязательно
					</div> }
				</div>

				<div className="Todo__newTaskForm-input Input">
					<input
						name="email"
						placeholder="Ваше E-mail"
						defaultValue=""
						{...register("email")}
					/>

					{ errors.email && <div className="Input__error-msg">
						Поле обязательно
					</div> }
				</div>

				<NewTaskFormBtn />
			</div>
		</form>
	)
}

export default memo(NewTaskForm)