import { Switch, Route, Redirect } from 'react-router-dom'
import eventEmitter from './helpers/eventEmitter'

import Flash from './components/Flash'
import Header from './components/Header'
import TodoPage from './pages/Todo'
import AuthPage from './pages/Auth'

window.flash = (message, type = 'success', position = 'top-right') =>
   eventEmitter.emit('flash', { message, type, position })

function App() {
   return (
      <>
       <Flash />
         <div className="App">
            <Header />

            <Switch>
               <Route exact path="/" component={TodoPage} />
               <Route exact path="/auth" component={AuthPage} />
               <Redirect from="*" to="/" />
            </Switch>
         </div>
      </>
   )
}

export default App
