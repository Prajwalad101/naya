import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from './components/Main';
import { Cart } from './components/Cart';
import { Error } from './components/Error';

export const CartContext = React.createContext();

let cartId = []; // Id of the added cart item

function App() {
  const snackbarRef = useRef(null);

  const [numItems, setNumItems] = useState(0);

  const addToCart = (itemId) => {
    cartId.push(itemId);
    setNumItems(cartId.length);
  };

  return (
    <Router>
      <Switch>
        <CartContext.Provider
          value={{ cartId, numItems, addToCart, snackbarRef }}
        >
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/cart'>
            <Cart idList={cartId} />
          </Route>
        </CartContext.Provider>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
