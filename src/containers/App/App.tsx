import React from 'react';
import './App.css';

import TableComponent from 'components/Table';
import Error from 'components/Error';

const App = (): JSX.Element => {

  return (
      <div className="App">

        <Error />
        <TableComponent list={[]} loading={false} />

      </div>
  );
}

export default App;
