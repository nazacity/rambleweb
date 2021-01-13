import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from '../../../../redux/actions/layoutActions';

import Activities from './components/Activities';
// import ActivityDetail from './components/ActivityDetail';

export default function FullScreenDialog({}) {
  const [state, setState] = useState(0);
  const [activities, setActivities] = useState([]);
  const [activityDetail, setActivityDetail] = useState({});
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const loadingTrue = () => {
    dispatch(setLoading(true));
  };

  const loadingFalse = () => {
    dispatch(setLoading(false));
  };

  useEffect(() => {
    setActivities(
      user.activities && user.activities.length > 0 ? user.activities : []
    );
  }, [user]);

  const stateContent = () => {
    switch (state) {
      case 0:
        return (
          <Activities
            activities={activities}
            setState={setState}
            setActivityDetail={setActivityDetail}
          />
        );
      //   case 1:
      //     return (
      //       <ActivityDetail
      //         activityDetail={activityDetail}
      //         setActivityDetail={setActivityDetail}
      //         setState={setState}
      //         loadingTrue={loadingTrue}
      //         loadingFalse={loadingFalse}
      //       />
      //     );
    }
  };

  return <div>{stateContent()}</div>;
}
