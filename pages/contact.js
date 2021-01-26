import Contact from 'landingpage/Contact';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/actions/layoutActions';

const contact = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(false));
  }, []);
  return (
    <div>
      <Contact />
    </div>
  );
};

export default contact;
