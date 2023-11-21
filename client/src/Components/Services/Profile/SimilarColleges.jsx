import React from 'react';
import { Card, Row } from 'antd';

function SimilarCollege({ data }) {
  return (
    <Card>
      <Row className='customRow'>
        <span className='text-dark'>Name:</span>
        <span>{data?.ownerObj?.ownerName}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>Email:</span>
        <span>{data?.ownerObj?.ownerEmail}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>Phone:</span>
        <span>{data?.ownerObj?.contact}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>Gender:</span>
        <span>{data?.ownerObj?.gender}</span>
      </Row>
    </Card>
  );
}

export default SimilarCollege;
