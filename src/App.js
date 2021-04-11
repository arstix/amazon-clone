import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, { useEffect } from "react"
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from './Orders'

const promise = loadStripe('pk_test_bVo3XJYWPDRsZhyhTPAuNdPw')

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect (() => {
      auth.onAuthStateChanged(authUser => {
        console.log('THE USER IS >>>', authUser);

        if (authUser) {
          // if the user is authenticated
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        } else {
          dispatch({
            type: 'SET_USER',
            user:null
          })
          // the user logged our
        }
      })
    //will only run once when the app component loads, if we add for example basket or user. It will run each time we update the basket or user
  }, [])
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path="/orders">
      <Header />
      <Orders />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/checkout">
      <Header />
      <Checkout />
      </Route>
      <Route path="/payment">
        <Header />
        <Elements stripe={promise}>
            <Payment />
        </Elements>
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
