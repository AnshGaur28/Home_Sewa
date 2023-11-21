import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Tag } from 'antd';
import { jwtDecode } from 'jwt-decode';
import tagColor from '../../config/consts';
import { getauth } from '../../utils/auth';
import API from '../../api';

function MainProfile() {
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const fetchData = async (req, res) => {
      const token = localStorage.getItem('token');
      const response = await axios.get(API.profile, {
        headers: { 'auth-token': token },
      });
      setProfileData(response.data.user[0]);
    };
    fetchData();
  }, []);
  return (
    <>
      {profileData ? (
        <Card>
          <Row className='customRow'>
            <span className='text-dark'>Name:</span>
            <span>{profileData?.name}</span>
          </Row>
          <Row className='customRow'>
            <span className='text-dark'>UserId:</span>
            <span>{profileData?._id}</span>
          </Row>
          <Row className='customRow'>
            <span className='text-dark'>isMerchant:</span>
            <span>{profileData?.isMerchant ? 'Yes' : 'No'}</span>
          </Row>
          <Row className='customRow'>
            <span className='text-dark'>Email:</span>
            <span>{profileData?.email}</span>
          </Row>
          <Row className='customRow'>
            <span className='text-dark'>Registration Date:</span>
            <span>{profileData?.date}</span>
          </Row>
        </Card>
      ) : null}
    </>
  );
}

export default MainProfile;
