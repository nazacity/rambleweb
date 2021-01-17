import React, { useState } from 'react';
import { regionEnum } from 'constants/provinces';
import ActivityByRegion from './components/ActivityByRegion';
import { setLoading } from '../../../../redux/actions/layoutActions';
import { useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import { get } from 'utils/request';
import usePopstate from 'react-usepopstate';
import Detail from '../PartnerContent/components/activitydetail/Detail';
import SpeedDial from './components/SpeedDial';
import BackButton from './components/BackButton';
import { post } from 'utils/request';
import QrcodeGenerator from '../PartnerContent/components/activitydetail/QrcodeGenerator';
import UserReport from '../PartnerContent/components/activitydetail/UserReport';
import ReportPrint from '../PartnerContent/components/report/ReportPrint';

const index = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(0);
  const [activityDetail, setActivityDetail] = useState({});
  const [qrcodeGeneratorModalOpen, setQrcodeGeneratorModalOpen] = useState(
    false
  );
  const [editMode, setEditMode] = useState({
    banner: false,
    title: false,
    location: false,
    dateinfo: false,
    courses: false,
    timeline: false,
    gifts: false,
    shirtstyle: false,
    size: false,
    rules: false,
    rules1: false,
    moredetail: false,
    condition: false,
  });

  const handleQrcodeGeneratorModalClose = () => {
    setQrcodeGeneratorModalOpen(false);
  };

  const { isBackButtonClicked } = usePopstate({
    isPrompt: false,
    callback: () => {
      setState(0);
    },
  });

  const editActivity = async (data, reset) => {
    loadingTrue();
    try {
      const res = await post(
        `/api/employees/editactivity/${activityDetail._id}`,
        data
      );

      if (res.status === 200) {
        if (reset) {
          reset(res.data);
        }
        setActivityDetail(res.data);
      }
      loadingFalse();
    } catch (error) {
      console.log(error);
      loadingFalse();
    }
  };

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

  const [value, setValue] = useState(0);

  const stateContent2 = () => {
    switch (value) {
      case 0:
        return (
          <div
            style={{
              width: '100%',
            }}
          >
            <ReportPrint activityDetail={activityDetail} />;
          </div>
        );
      case 1:
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 50,
            }}
          >
            <Detail
              activityDetail={activityDetail}
              editActivity={editActivity}
              editMode={editMode}
              setEditMode={setEditMode}
            />
          </div>
        );
      case 2:
        return (
          <UserReport
            loadingFalse={loadingFalse}
            loadingTrue={loadingTrue}
            activityDetail={activityDetail}
          />
        );
      case 3:
        return <ReportPrint activityDetail={activityDetail} />;
      default:
        return <div>Content is Not Found</div>;
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
          <div>
            {stateContent2()}
            <SpeedDial
              setValue={setValue}
              setState={setState}
              setQrcodeGeneratorModalOpen={setQrcodeGeneratorModalOpen}
              activityDetail={activityDetail}
            />
            <QrcodeGenerator
              open={qrcodeGeneratorModalOpen}
              handleClose={handleQrcodeGeneratorModalClose}
              activityDetail={activityDetail}
            />
            <BackButton setState={setState} />
          </div>
          // <ActivityDetail
          //   activityDetail={activityDetail}
          //   setActivityDetail={setActivityDetail}
          //   setState={setState}
          //   loadingTrue={loadingTrue}
          //   loadingFalse={loadingFalse}
          // />
        );
    }
  };

  return <div>{stateContent()}</div>;
};

export default index;
