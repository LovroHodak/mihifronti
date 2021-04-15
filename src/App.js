import "./App.css";
import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import Navv from "./components/Navv";
import Footer from "./components/Footer";
import Kuhinja from "./components/Kuhinja";
import { MyProvider } from "./MyContext";

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
        </Switch>
        <Footer />
      </div>
    </MyProvider>
  );
}

export default withRouter(App);
