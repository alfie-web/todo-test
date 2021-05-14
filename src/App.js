import { Switch, Route, Redirect } from 'react-router-dom'

import TodoPage from './pages/Todo'

function App() {
   return <div className="App">
      {/* Header */}

      <Switch>
         <Route exact path="/" component={TodoPage} />
         <Redirect from="*" to="/" />
      </Switch>
   </div>
}

export default App
