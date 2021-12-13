import React, {useRef} from 'react';
import Drawer from './components/Menu/Drawer';
import './components/Menu/drawer-styles.css';
import Login from './pages/Login';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Drawer/>
      <div style={{marginTop: '60pt'}}>
        <Table/>
        <Table/>
      </div>
      
    </div>
  );
}

export default App;
