import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "./components/header/header.component.jsx";
import Spinner from "./components/spinner/spinner.component.jsx";
import ErrorBoundary from "./components/error-boundary/error-boundary.component.jsx";

import { GlobalStyle } from "./global.styles.js";

import { currentUserSelector } from "./redux/user/user.selectors.js";
import { checkUserSession } from "./redux/user/user.actions.js";

const HomePage = lazy(() => import("./pages/homepage/homepage.component.jsx"));
const ShopPage = lazy(() => import("./pages/shop/shop.component.jsx"));
const SignInAndSignUp = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx")
);
const CheckoutPage = lazy(() =>
  import("./pages/checkout/checkout.component.jsx")
);

const App = ({ checkUserSession, currentUser }) => {
  // This is one way of mimicking componentDidMount() function
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner>... Loading ...</Spinner>}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? (
                  <Redirect to="/"></Redirect>
                ) : (
                  <SignInAndSignUp></SignInAndSignUp>
                )
              }
            />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
