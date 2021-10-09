import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from './components/Main';
import { Cart } from './components/Cart';
import { Error } from './components/Error';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
