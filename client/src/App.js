
import "./App.css";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";
import  Home  from "./Home/Home";
import  List  from "./List/List";

function App() {
  const history = createBrowserHistory();

  return (
    <div className="App">
     <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home history={history} />
          </Route>
          <Route exact path="/history">
            <List history={history} />
          </Route>
          </Switch>
          </Router>
     
    </div>
  );
}

export default App;
