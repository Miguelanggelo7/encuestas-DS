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
                  <Route exact path="/crear-encuesta" auth>
                    <Drawer />
                    <Question_Form/>
                  </Route>
                  <Route exact path="/buscar/:id" auth>
                    <Drawer />
                    <User_form/>
                  </Route>
                  <Route exact path="/mis-encuestas" auth>
                    <Drawer />
                    <MyForms/>
                  </Route>
                  <Route exact path="/buscar" auth>
                    <Drawer />
                    <SearchForms/>
                  </Route>
                  <Route exact path="/respuestas" auth>
                    <Drawer />
                    <Table style={{margin: '50pt'}} 
                      title={"Datos de prueba"}
                      columns={[
                        { title: 'Nombre de usuario', field: 'usuario' },
                        { title: '¿Capital de Venezuela?', field: 'Pregunta1' },
                        { title: '¿Capital de Argentina?', field: 'Pregunta2'},
                        { title: '¿Capital de Chile?', field: 'Pregunta3' }
                      ]}
                      data={[{ usuario: 'Josemsaad', Pregunta1: 'Caracas', Pregunta2: "Buenos Aires", Pregunta3: "Santiago de Chile" } , 
                             { usuario: 'Miguel_jsh', Pregunta1: 'El salto ángel', Pregunta2: "Buenos Aires", Pregunta3: "México DF" },
                             { usuario: 'Edmond_jcm', Pregunta1: 'Caracas', Pregunta2: "No sé", Pregunta3: "Santiago de Chile" },
                             { usuario: 'Vanessa_lozano', Pregunta1: 'Caracas', Pregunta2: "No sé", Pregunta3: "Santiago de Chile" },
                             { usuario: 'JuanReina', Pregunta1: 'Caracas', Pregunta2: "No sé", Pregunta3: "Santiago de Chile" },
                             { usuario: 'NaGiral', Pregunta1: 'Caracas', Pregunta2: "No sé", Pregunta3: "Santiago de Chile" },
                             { usuario: 'dualipa', Pregunta1: 'Caracas', Pregunta2: "No sé", Pregunta3: "Santiago de Chile" },
                             { usuario: 'otrodato', Pregunta1: 'Caracas', Pregunta2: "No sé", Pregunta3: "Santiago de Chile" },
                             { usuario: 'semeacabaronlosnombres', Pregunta1: 'Caracas', Pregunta2: "No sé", Pregunta3: "Santiago de Chile" },
                             { usuario: 'nombre1', Pregunta1: 'Caracas', Pregunta2: "No sé", Pregunta3: "Santiago de Chile" },
                             { usuario: 'nombre2', Pregunta1: 'Caracas', Pregunta2: "No sé", Pregunta3: "Santiago de Chile" },
                             { usuario: 'nombre3', Pregunta1: 'Caracas', Pregunta2: "No sé", Pregunta3: "Santiago de Chile" },
                             { usuario: 'nombre4', Pregunta1: 'Caracas', Pregunta2: "No sé", Pregunta3: "Santiago de Chile" },
                             { usuario: 'nombre5', Pregunta1: 'Caracas', Pregunta2: "No sé", Pregunta3: "Santiago de Chile" },
                             { usuario: 'nombre6', Pregunta1: 'Caracas', Pregunta2: "No sé", Pregunta3: "Santiago de Chile" },
                             { usuario: 'nombre7', Pregunta1: 'Caracas', Pregunta2: "No sé", Pregunta3: "Santiago de Chile" },
                             { usuario: 'nombre8', Pregunta1: 'Caracas', Pregunta2: "No sé", Pregunta3: "Santiago de Chile" },
                             { usuario: 'nombre9', Pregunta1: 'Caracas', Pregunta2: "No sé", Pregunta3: "Santiago de Chile" },
                             { usuario: 'nombre10', Pregunta1: 'Caracas', Pregunta2: "No sé", Pregunta3: "Santiago de Chile" },
                             { usuario: 'nombre11', Pregunta1: 'Caracas', Pregunta2: "No sé", Pregunta3: "Santiago de Chile" }
                           ]}
                    />
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
