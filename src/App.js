import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'
import { auth } from './firebase'
import { useStateValue } from './context/StateProvider';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          payload: {
            user: authUser
          }
        })
      } else {
        dispatch({
          type: 'SET_USER',
          payload: {
            user: null
          }
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
