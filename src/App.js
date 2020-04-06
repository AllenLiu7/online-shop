import React from "react";
import "./App.css";
import HomePage from "./pages/homepage.component.jsx";
import shopPage from "./components/shop/shop-page.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignPage from "./components/sign-in&up-page/sign-in&up-page.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={shopPage} />
        <Route path="/sign" component={SignPage} />
      </Switch>
    </div>
  );
}

export default App;
