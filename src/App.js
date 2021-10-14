import Home from './pages/home'
import Company from './pages/company'
import ScrollToTop from './utils/ScrollToTop'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/company'>
          <Company />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
