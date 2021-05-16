import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.sass'

const Header = () => {
   return (
      <header className="Header">
         <div className="container">
            <span className="Header__nav-item">
               <NavLink exact to="/" activeClassName="Header__nav--active">
                  Список задач
               </NavLink>
            </span>

            <span className="Header__nav-item">
               <NavLink exact to="/auth" activeClassName="Header__nav--active">
                  Войти в аккаунт
               </NavLink>
            </span>
         </div>
      </header>
   )
}

export default Header
