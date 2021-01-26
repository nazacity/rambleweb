import React, { useEffect } from 'react';
import GetStarted from 'landingpage/GetStarted';
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/actions/layoutActions';

const getstarted = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(false));
  }, []);
  return (
    <div style={{ height: '100vh' }}>
      <GetStarted />
    </div>
  );
};

export default getstarted;
