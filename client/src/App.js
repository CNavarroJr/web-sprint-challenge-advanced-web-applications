import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

import PrivateRoute from './utils/PrivateRoute';
import BubblePage from './components/BubblePage';
// import Header from './components/header'

function App() {
  return (
    <>
    {/* <Header /> */}
    <div className="App">
      <Route exact path="/" component={Login} />
      <PrivateRoute path='/bubbles' component={BubblePage} />
    </div>
  </>
  );
}

export default App;
