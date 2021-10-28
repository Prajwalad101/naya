import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from './components/Main';
import { Cart } from './components/Cart/Cart';
import { Error } from './components/Error';
import { itemFromId } from './components/Cart/cartFunctions';

export const CartContext = React.createContext();

function App() {
  const snackbarRef = useRef(null);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    const item = itemFromId(itemId);
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <Switch>
        <CartContext.Provider
          value={{
            cartItems,
            setCartItems,
            addToCart,
            snackbarRef,
          }}
        >
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/cart'>
            <Cart />
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
