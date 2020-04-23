import React from "react";
import NavBar from "./NavBar";
import Posts from "./Posts";
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
            <Posts />
          )}/>
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
