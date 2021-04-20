import "./App.css";
import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import Navv from "./components/Navv";
import Footer from "./components/Footer";
import Kuhinja from "./components/Kuhinja";
import { MyProvider } from "./MyContext";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import Vrt from "./components/Vrt";
import Sport from "./components/Sport";
import Relax from "./components/Relax";
import Drugo from "./components/Drugo";
import SuccessPage from "./components/SuccessPage";
import UserData from "./components/UserData";

function App() {
  return (
    <MyProvider>
      <div className="App">
        <Navv />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Home />;
            }}
          />
          <Route
            exact
            path="/kuhinja"
            render={() => {
              return <Kuhinja />;
            }}
          />
          <Route
            exact
            path="/vrt"
            render={() => {
              return <Vrt />;
            }}
          />
          <Route
            exact
            path="/sport"
            render={() => {
              return <Sport />;
            }}
          />
          <Route
            exact
            path="/relax"
            render={() => {
              return <Relax />;
            }}
          />
          <Route
            exact
            path="/drugo"
            render={() => {
              return <Drugo />;
            }}
          />
          <Route
            exact
            path="/detail/:id"
            render={(routeProps) => {
              return <Detail {...routeProps} />;
            }}
          />
          <Route
            exact
            path="/cart"
            render={() => {
              return <Cart />;
            }}
          />
                              <Route
            exact
            path="/userData"
            render={() => {
              return <UserData />;
            }}
          />
                    <Route
            exact
            path="/successPage"
            render={() => {
              return <SuccessPage />;
            }}
          />
        </Switch>
        <Footer />
      </div>
    </MyProvider>
  );
}

export default withRouter(App);
