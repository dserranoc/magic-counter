import { Route, Switch } from 'wouter-preact'
import Game from './pages/Game'
import Settings from './pages/Settings'

function Routes () {
  return (
    <div>
      <Switch>
        <Route path='/' component={Settings} />
        <Route path='/game' component={Game} />
      </Switch>
    </div>
  )
}
export default Routes
