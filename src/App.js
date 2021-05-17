import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import eventEmitter from './helpers/eventEmitter'

import Flash from './components/Flash'
import Header from './components/Header'
import TodoPage from './pages/Todo'
import AuthPage from './pages/Auth'

window.flash = (message, type = 'success', position = 'top-right') =>
   eventEmitter.emit('flash', { message, type, position })

const ROUTES = [
   { path: '/', component: TodoPage },
   { path: '/auth', component: AuthPage, auth: false },
]


const Routes = ({ routes }) => {
   const isAuth = useSelector(state => state.users.isAuth)

   return (
      <Switch>
         {routes.map(
            (route, i) =>
               (route.auth === isAuth || !route.hasOwnProperty('auth')) && (
                  <Route
                     key={i}
                     exact
                     path={route.path}
                     component={route.component}
                  />
               )
         )}
         <Redirect from="*" to="/" />
      </Switch>
   )
}

const App = () => {
   return (
      <>
         <Flash />

         <div className="App">
            <Header />

            <Routes
               routes={ROUTES}
            />
         </div>
      </>
   )
}

export default App
