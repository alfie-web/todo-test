import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/actions/users'
import { NavLink } from 'react-router-dom'

import './Header.sass'

const Header = () => {
   const dispatch = useDispatch()
   const isAuth = useSelector(state => state.users.isAuth)

   const logoutHandler = () => dispatch(logout())

   return (
      <header className="Header">
         <div className="container">
            <span className="Header__nav-item">
               <NavLink exact to="/" activeClassName="Header__nav--active">
                  Список задач
               </NavLink>
            </span>

            {!isAuth ? (
               <span className="Header__nav-item">
                  <NavLink exact to="/auth" activeClassName="Header__nav--active">
                     Войти в аккаунт
                  </NavLink>
               </span>
            ) : (
               <span className="Header__nav-item" onClick={logoutHandler}>
                  Выйти из аккаунта
               </span>
            )}
         </div>
      </header>
   )
}

export default Header
