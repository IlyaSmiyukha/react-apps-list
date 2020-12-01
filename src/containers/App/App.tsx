import React from 'react';
import { useQuery } from '@apollo/client';
import './App.css';

import TableComponent from 'components/Table';
import Error from 'components/Error';

import { node } from './types'

import { getRelosList } from 'api/ListApi'

const App = (): JSX.Element => {

  const { loading, data, error } = useQuery(
    getRelosList,
    {
      variables: {
        searchWord: 'react',
      }
    }
  );

  const list = data ? data.search.edges.map((nodeItem: {node: node}) => nodeItem.node) : [];

  return (
      <div className="App">

        {error && <Error />}
        {!error && <TableComponent list={list} loading={loading} />}

      </div>
  );
}

export default App;
