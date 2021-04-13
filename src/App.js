import "./App.css";
import React, {useEffect} from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import Navv from "./components/Navv";
import Footer from "./components/Footer";

function App() {

  return (
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
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
