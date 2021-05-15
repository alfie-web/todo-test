import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'

import TodoPage from './pages/Todo'
import AuthPage from './pages/Auth'

function App() {
   return <div className="App">
      <Header />

      <Switch>
         <Route exact path="/" component={TodoPage} />
         <Route exact path="/auth" component={AuthPage} />
         <Redirect from="*" to="/" />
      </Switch>
   </div>
}

export default App
