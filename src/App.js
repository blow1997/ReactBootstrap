import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Nothing } from "./components/Nothing";
/* import { Layout } from './components/Layout'; */
import { NavigationBar } from "./components/Navigation";


function App() {
  return (
    <div className="App">

      <NavigationBar />

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Nothing} />
        </Switch>
      </Router>


    </div>
  );
}

export default App;
