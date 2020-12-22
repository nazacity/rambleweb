import React, { useState } from 'react';
import { regionEnum } from '../../../src/constants/provinces';
import ActivityByRegion from './components/ActivityByRegion';
import { setLoading } from '../../../redux/actions/layoutActions';
import { useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import ActivityDetail from './components/ActivityDetail';
import { get } from '../../../src/utils/request';

const index = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(0);
  const [activityDetail, setActivityDetail] = useState({});

  const loadingTrue = () => {
    dispatch(setLoading(true));
  };

  const loadingFalse = () => {
    dispatch(setLoading(false));
  };

  const getActivity = async (id) => {
    loadingTrue();

    try {
      const res = await get(`/api/employees/getactivity/${id}`);

      console.log(res);
      if (res.status === 200) {
        setActivityDetail(res.data);
        setState(1);
      }
      loadingFalse();
    } catch (error) {
      loadingFalse();
    }
  };

  const stateContent = () => {
    switch (state) {
      case 0:
        return (
          <div>
            {regionEnum.map((item) => {
              return (
                <div key={item} style={{ margin: '40px auto' }}>
                  <div
                    style={{
                      padding: 20,
                      backgroundColor: 'black',
                      color: '#fff',
                    }}
                  >
                    <Typography variant="h4">{item}</Typography>
                  </div>
                  <ActivityByRegion
                    loadingTrue={loadingTrue}
                    loadingFalse={loadingFalse}
                    setState={setState}
                    region={item}
                    setActivityDetail={setActivityDetail}
                    getActivity={getActivity}
                  />
                </div>
              );
            })}
          </div>
        );
      case 1:
        return (
          <ActivityDetail
            activityDetail={activityDetail}
            setActivityDetail={setActivityDetail}
            setState={setState}
            loadingTrue={loadingTrue}
            loadingFalse={loadingFalse}
          />
        );
    }
  };

  return <div style={{ zIndex: 50, minWidth: 800 }}>{stateContent()}</div>;
};

export default index;
