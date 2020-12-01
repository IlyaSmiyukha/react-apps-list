import React from 'react';
import { Table } from 'antd';
import { propsType } from './type'

import './TableComponent.css';

const columns = [
  {
    title: 'Name',
    dataIndex: 'nameWithOwner',
    key: 'name',
    render: (name, data) =>  <a href={data.url} rel="noreferrer" target='_blank'>{name}</a>,
  },
  {
    title: () => 'Stars',
    dataIndex: 'stargazerCount',
    key: 'stars',
    render: stars,
  },
  {
    title: 'Forks',
    dataIndex: 'forkCount',
    key: 'forks',
    render: forks,
  },
]

const TableComponent = (props:propsType) => {
  const {
    list,
    loading
  } = props;
  
  return <Table dataSource={list} columns={columns} rowKey={record => record.id} loading={loading} pagination={false}/>;
}

export default TableComponent;
