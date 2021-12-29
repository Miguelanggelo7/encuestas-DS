import React, {useRef} from 'react';
import Drawer from './components/Menu/Drawer';
import './components/Menu/drawer-styles.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { Route } from "./components/Route";
import Login from './pages/Login';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <div id="blackground"/>
          <div id="container-app">
            <Router>
              <Switch>
                <Route exact path="/" auth>
                  <Drawer />
                  <Table/>
                  <Table/>
                  <Table/>
                </Route>
                <Route path="/auth">
                  <Login/>
                </Route>
              </Switch>
            </Router>
          </div>
      </UserProvider> 
    </div>
  );
}

export default App;
