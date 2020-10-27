import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from './firebase';
import { useStateValue} from "./StateProvider";
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";


const promise = loadStripe('pk_test_51HecgVILZcsBdsh8alGegYzF0kt9sEgRKnoOc44HGOF7haiRnEuAeSuqXCWkk9yyTH6GPppJJmaBKnHuNEw1UuKW00Bp5YC21U')

function App() {

  const [{user}, dispatch] = useStateValue();

  //rewrite class base component to function component
  useEffect(() => {
    // will only run once when the app component loads...

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //Any cleanup operations
      unsubscribe()
    }
  }, []);

  console.log("User is " + user)
  return (
   <Router>
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
   </Router>
  );
}

export default App;
