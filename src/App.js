import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import { HomePage } from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import CheckoutPage from "./pages/checkout/checkout.component.jsx";

import { currentUserSelector } from "./redux/user/user.selectors.js";

class App extends React.Component {
  // This is used as a way of unsubscribing from the authentication (to prevent memory leaks)
  unsubscribeFromAuth = null;

  componentDidMount() {
    // Subscribe onAuthStateChanged observer to the unsubscribeFromAuth property.
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth !== null) {
    //     const userReference = await createUserProfileDocument(userAuth);
    //     userReference.onSnapshot((snapshot) => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data(),
    //       });
    //     });
    //   } else {
    //     setCurrentUser(null);
    //   }
    // });
  }

  componentWillUnmount() {
    // unsubscribe from the auth when the component unmounts to prevent memory leaks
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/"></Redirect>
              ) : (
                <SignInAndSignUp></SignInAndSignUp>
              )
            }
          ></Route>
          <Route exact path="/checkout" component={CheckoutPage}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
});

export default connect(mapStateToProps)(App);
