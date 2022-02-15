import React, {useRef} from 'react';
import Drawer from './components/Menu/Drawer';
import './components/Menu/drawer-styles.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { Route } from "./components/Route";
import Login from './pages/Login';
import Table from './components/Table';
import Question_Form from './components/Question_form';
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Home from "./pages/Home";
import SearchForms from "./pages/SearchForms";
import User_form from './components/user_form';
import MyForms from './pages/MyForms';
import NotFound from './pages/NotFound';

const theme = createMuiTheme({
  palette: {
    //Azul
    primary: {
      main: "#0185B6",
    },
    //Verde
    secondary: {
      main: "#00D49C",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <UserProvider>
          <div id="blackground"/>
            <div id="container-app">
              <Router>
                <Switch>
                  <Route exact path="/" auth>
                    <Drawer />
                    <Home />
                  </Route>
                  <Route exact path="/crearEncuesta" auth>
                    <Drawer />
                    <Question_Form/>
                  </Route>
                  <Route exact path="/encuestaPrueba" auth>
                    <Drawer />
                    <User_form/>
                  </Route>
                  <Route exact path="/misEncuestas" auth>
                    <Drawer />
                    <MyForms/>
                  </Route>
                  <Route exact path="/buscarEncuestas" auth>
                    <Drawer />
                    <SearchForms/>
                  </Route>
                  <Route path="/auth">
                    <Login/>
                  </Route>
                  <Route path='*' component={NotFound} />
                </Switch>
              </Router>
            </div>
        </UserProvider> 
      </ThemeProvider>
    </div>
  );
}

export default App;


// <div style={{alignContent:'flex-start'}}>
//     <div>
//       <Resultados/>
//     </div>
//   <BasicSpeedDial/>
// </div>



// <div>
//   <EncuestaRealizada/>
// </div>
// <div>
//   <EncuestaRealizada/>
// </div>
// <div>
//   <EncuestaRealizada/>
// </div>



// <Drawer/>
// <div id="blackground"/>
// <div id="container-app">
//   <Table/>
//   <Table/>
// </div>
