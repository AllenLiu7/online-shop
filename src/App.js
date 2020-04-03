import React from "react";
import "./App.css";
import HomePage from "./pages/homepage.component.jsx";
import shopPage from "./components/shop/shop-page.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={shopPage} />
      </Switch>
    </div>
  );
}

export default App;
