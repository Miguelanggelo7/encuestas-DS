import React from 'react';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Table 
        columns={[
          { title: 'Adı', field: 'name' },
          { title: 'Soyadı', field: 'surname' },
          { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
          { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
        ]}
        data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
      />
    </div>
  );
}

export default App;
