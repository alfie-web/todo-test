import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { login } from '../../../../store/actions/users'
import Button from '../../../../components/Button'

const validationSchema = yup.object().shape({
   username: yup.string().required().min(3).max(20),
   password: yup.string().required().min(3).max(30),
})

const AuthFormBtn = () => {
	// const isFetching = useSelector(state => state.tasks.isFetching)

	return (
		<Button 
			text="Войти"
			variant="black"
			type="submit"
			// disabled={isFetching}
		/>
	)
}

const AuthForm = () => {
	const dispatch = useDispatch()
	const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(validationSchema),
   })

   const onSubmit = (data) => {
      dispatch(login(data))
   }

	return (
		<form className="Auth__form" onSubmit={handleSubmit(onSubmit)}>
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
					name="password"
					placeholder="Ваш пароль"
					defaultValue=""
					type="password"
					{...register("password")}
				/>

				{ errors.password && <div className="Input__error-msg">
					Поле обязательно
				</div> }
			</div>

			<AuthFormBtn />
		</form>
	)
}

export default memo(AuthForm)
