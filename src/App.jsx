import React, {useRef} from 'react';
import Drawer from './components/Menu/Drawer';
import './components/Menu/drawer-styles.css';
import Login from './pages/Login';
import Table from './components/Table';
import EncuestaRealizada from './components/Pantalla/Encuesta-realizada';
import BarCharts from './components/Pantalla/Pantalla-resultados/graphics/BarCharts';
import PieChart from './components/Pantalla/Pantalla-resultados/graphics/PieChart';
import BasicSpeedDial from './components/Pantalla/SpeedDial';
import IconButton from './components/Pantalla/buttonHome';
import Resultados from './components/Pantalla/Pantalla-resultados/Resultados';
import './components/Pantalla/Pantalla-resultados/Resultados.css';

function App() {
  return (
    <div style={{alignContent:'flex-start'}}>
        <div>
          <Resultados/>
        </div>
      <BasicSpeedDial/>
    </div>
  );
}

export default App;


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
