import React from "react";
import "./App.css";
import HomePage from "./pages/homepage.component.jsx";
import shopPage from "./components/shop/shop-page.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignPage from "./components/sign-in&up-page/sign-in&up-page.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  state = { currentUser: null };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //noSnapshot sents back snapshot of the userRef.
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                //.data()will get back properties stored in db
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        this.setState({ currentUser: null });
      }
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
