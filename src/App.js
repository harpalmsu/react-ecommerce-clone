import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContainer from "./components/MainContainer/MainContainer";
import React, { useState } from "react";
import SignUp from "./components/SignUp/SignUp";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Todo from "./components/Todo/Todo";
import Table from "./components/Table/Table";
import ReactTable from "./components/Table/ReactTable";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const ThemeContext = React.createContext();
function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value="orange">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route path="/signup" component={SignUp} />
            <Route path="/cart" component={ShoppingCart} />
            <Route path="/todo" component={Todo} />
            <Route path="/table" component={Table} />
            <Route path="/reactTable" component={ReactTable} />
          </Switch>
          <Footer />
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
