import React from 'react';
import { Button, Tag } from 'antd';
// import tagColor from "../../config/consts";
import { Link } from 'react-router-dom';

const tagColor = [
  '#ffa39e',
  '#ffbb96',
  '#ffd591',
  '#ffe58f',
  '#fffb8f',
  '#eaff8f',
  '#b7eb8f',
  '#87e8de',
  '#91d5ff',
  '#adc6ff',
  '#d3adf7',
  '#ffadd2',
];
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, row) => (
      <Link to={`allServices/${row.service_id}`}>{text}</Link>
    ),
  },
  {
    title: 'Category',
    dataIndex: ['typeObj', 'name'],
  },
  {
    title: 'City',
    dataIndex: ['addressObj', 'city'],
  },
  {
    title: 'State',
    dataIndex: ['addressObj', 'state'],
  },
  {
    title: 'Tags',
    dataIndex: 'tag',
    render: (text) =>
      text.map((prop) => {
        const num = prop.charCodeAt(0) + prop.charCodeAt(prop.length - 1);
        return (
          <Tag style={{ color: 'black' }} color={tagColor[num % 11]}>
            {prop}
          </Tag>
        );
      }),
  },
  {
    title: 'Owner name',
    dataIndex: ['ownerObj', 'ownerName'],
    render: (data) => data || 'Not Specified',
  },
  {
    title: 'Owner number',
    dataIndex: ['ownerObj', 'contact'],
    render: (data) => data || 'Not Specified',
  },

  {
    title: 'Experience',
    dataIndex: 'experiance',
  },
  {
    title: 'Customers Served',
    dataIndex: 'customers_served',
  },
  {
    title: 'Request Service',
    render: () => {
      return (
        <a href='/book-service'>
          <Button href='' style={{ color: 'black' }}>
            Book Now
          </Button>
        </a>
      );
    },
  },
];

export default columns;
