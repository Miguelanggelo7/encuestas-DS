import React, {useRef} from 'react';
import Drawer from './components/Menu/Drawer';
import './components/Menu/drawer-styles.css';
import Login from './pages/Login';
import Table from './components/Table';
import EncuestaRealizada from './components/Pantalla/Encuesta-realizada';
import BarCharts from './components/graphics/BarCharts';
import BasicSpeedDial from './components/Pantalla/SpeedDial';
import IconButton from './components/Pantalla/buttonHome';



function App() {
  return (
    <div>
      <div style = {{position: 'fixed'}}>
        <IconButton/>
        <BasicSpeedDial/>
      </div>
        <EncuestaRealizada/>
        <EncuestaRealizada/>
        <EncuestaRealizada/>
    </div>
  );
}

export default App;




// <Drawer/>
// <div id="blackground"/>
// <div id="container-app">
//   <Table/>
//   <Table/>
// </div>
