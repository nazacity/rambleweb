import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from '../../../../redux/actions/layoutActions';

import Activities from './components/Activities';
import ReportPrint from '../ActivityContent/components/report/ReportPrint';
import BackButton from '../ActivityContent/components/activitydetail/BackButton';
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
      case 1:
        return (
          <div>
            <BackButton setState={setState} />
            <ReportPrint activityDetail={activityDetail} />
          </div>
        );
    }
  };

  return <div>{stateContent()}</div>;
}
