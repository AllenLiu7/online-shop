import React from "react";
import "./App.css";
import HomePage from "./pages/homepage.component.jsx";
import shopPage from "./components/shop/shop-page.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignPage from "./components/sign-in&up-page/sign-in&up-page.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  state = { currentUser: null };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={shopPage} />
          <Route path="/sign" component={SignPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
