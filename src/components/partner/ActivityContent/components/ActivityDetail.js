import React, { useState } from 'react';

import { post } from 'utils/request';
import Detail from './activitydetail/Detail';
import UserReport from './activitydetail/UserReport';
import Report from './activitydetail/Report';
import QrcodeGenerator from './activitydetail/QrcodeGenerator';
import SpeedDial from './activitydetail/SpeedDial';
import BackButton from './activitydetail/BackButton';
import ReportPrint from './report/ReportPrint';
import usePopstate from 'react-usepopstate';

const ActivityDetail = ({
  activityDetail,
  setState,
  setActivityDetail,
  loadingTrue,
  loadingFalse,
}) => {
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
    senderAddress: false,
  });

  const [qrcodeGeneratorModalOpen, setQrcodeGeneratorModalOpen] = useState(
    false
  );

  const handleQrcodeGeneratorModalClose = () => {
    setQrcodeGeneratorModalOpen();
  };

  const editActivity = async (data, reset) => {
    loadingTrue();
    try {
      const res = await post(
        `/api/partners/editactivity/${activityDetail._id}`,
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

  const { isBackButtonClicked } = usePopstate({
    isPrompt: false,
    callback: () => {
      setState(0);
    },
  });

  const [value, setValue] = useState(0);

  const stateContent = () => {
    switch (value) {
      case 0:
        return (
          <div
            style={{
              width: '100%',
            }}
          >
            <Report
              activityDetail={activityDetail}
              loadingFalse={loadingFalse}
              loadingTrue={loadingTrue}
              setActivityDetail={setActivityDetail}
              editActivity={editActivity}
            />
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

  return (
    <div>
      {stateContent()}
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
  );
};

export default ActivityDetail;
