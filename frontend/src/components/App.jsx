import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import LoadingBg from "./LoadingBg";
import About from "./About";
import Compose from "./Compose";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [loadingScreen, setLoadingScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false);
    }, 2000);
  }, []);

  return loadingScreen ? (
    <LoadingBg />
  ) : (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/About" render={() => <About />} />
          <Route exact path="/Compose" render={() => <Compose />} />
          <Route exact path="/loading" render={() => <LoadingBg />} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
