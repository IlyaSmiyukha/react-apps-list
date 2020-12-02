import React from 'react';
import { Table } from 'antd';
import { propsType } from './types';
import { node } from 'containers/App/types'

import './Table.css';

const columns = [
  {
    title: 'Name',
    dataIndex: 'nameWithOwner',
    key: 'name',
    render: (name:string, data:node) =>  <a href={data.url} rel="noreferrer" target='_blank'>{name}</a>,
  },
  {
    title: () => 'Stars',
    dataIndex: 'stargazerCount',
    key: 'stars',
  },
  {
    title: 'Forks',
    dataIndex: 'forkCount',
    key: 'forks',
  },
]

const TableComponent = (props:propsType): JSX.Element => {
  const {
    list,
    loading
  } = props;

  return <Table dataSource={list} columns={columns} rowKey={record => record.id} loading={loading} pagination={false}/>;
}

export default TableComponent;
