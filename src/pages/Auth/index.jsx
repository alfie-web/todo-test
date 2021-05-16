import React from 'react'

import AuthForm from './components/AuthForm'
import './Auth.sass'

const AuthPage = () => {
   return (
      <main className="Auth page">
         <div className="container">
            <h1>Авторизация</h1>

            <AuthForm />
         </div>
      </main>
   )
}

export default AuthPage
