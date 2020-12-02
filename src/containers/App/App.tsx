import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import './App.css';

import TableComponent from 'components/Table';
import Error from 'components/Error';
import { Button } from 'antd';

import { node } from './types'

import { getRelosList } from 'api/ListApi'

const App = (): JSX.Element => {

  const { loading, data, error, fetchMore } = useQuery(
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

        {
          !error && <Fragment>
            <TableComponent list={list} loading={loading} />

            <Button
              disabled={data && !data.search.pageInfo.hasNextPage}
              onClick={() => {
                fetchMore({
                  variables: {
                    cursor: data.search.pageInfo.endCursor
                  }
                })
              }}>Load more</Button>
          </Fragment>
        }
      </div>
  );
}

export default App;
