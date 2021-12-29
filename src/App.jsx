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
          <Router>
            <Switch>
              <div id="container-app">
                <Route exact path="/" auth>
                  <Drawer />
                  <Table/>
                </Route>
                <Route path="/auth">
                  <Login/>
                </Route>
              </div>
            </Switch>
          </Router>
      </UserProvider> 
    </div>
  );
}

export default App;
