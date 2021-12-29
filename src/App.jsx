import React, {useRef} from 'react';
import Drawer from './components/Menu/Drawer';
import './components/Menu/drawer-styles.css';
import Login from './pages/Login';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Drawer/>
      <div id="blackground"/>
      <div id="container-app">
        <Login />
      </div>
      
    </div>
  );
}

export default App;
