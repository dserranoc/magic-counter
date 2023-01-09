import { Route, Switch } from 'wouter-preact'
import Game from './pages/Game'
import Settings from './pages/Settings'
import Home from './pages/Home'

function Routes () {
  return (
    <Switch>
      <Route path='/' component={Home} />
      <Route path='/game' component={Game} />
    </Switch>
  )
}
export default Routes
