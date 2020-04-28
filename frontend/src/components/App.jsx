import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Compose from "./Compose";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/"
          render={()=>(
            <Home />
          )}/>
           <Route exact path="/About"
         render={()=> (
      <About />)
         }/>
         <Route exact path="/Compose"
         render={()=> (
      <Compose />)
         }/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
