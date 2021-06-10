import "./App.css";

import { Redirect, Route, Switch } from "react-router-dom";

import CheckoutPage from "./pages/checkout-page/checkout-page.component";
import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/homepage.component";
import React from "react";
import ShopPage from "./pages/shop-page/shop-page.component";
import SignPage from "./pages/sign-in&up-page/sign-in&up-page.component";
import { checkUserSession } from "./redux/user/user.action";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.seletors";

class App extends React.Component {
  // unsubscribeFromAuth = null;
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  // scomponentDidMount() {
  //   //const { setCurrentUser } = this.props;
  //   // //Every time there is a  user sign in, onAuthStateChanged will return "user" contains user detail
  //   // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
  //   //   if (user) {
  //   //     //If the user dosen't exist, createUserProfileDocument will create a profile for this user (from google), so that this user will have a UID which is used for session
  //   //     //If the user exist, this function will be passed
  //   //     const userRef = await createUserProfileDocument(user);
  //   //     console.log(user);
  //   //     console.log(userRef);
  //   //     //noSnapshot is a listener, when ever snapshot is changed, onSnapShot will send back the changed snapshot, here the change could be the signed in time.
  //   //     userRef.onSnapshot((snapShot) => {
  //   //       setCurrentUser(
  //   //         {
  //   //           currentUser: {
  //   //             id: snapShot.id,
  //   //             //.data()will get back properties stored in db
  //   //             ...snapShot.data(),
  //   //           },
  //   //         },
  //   //         () => {
  //   //           console.log(this.state);
  //   //         }
  //   //       );
  //   //     });
  //   //   } else {
  //   //     //if no one signed in, the user = null.
  //   //     setCurrentUser(user);
  //   //   }
  //   // });
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/sign"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignPage />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
