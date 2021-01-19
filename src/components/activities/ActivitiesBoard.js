import React from 'react';

const ActivitiesBoard = () => {
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(   139deg,rgb(100, 43, 115) 0%,rgb(198, 66, 110) 100%)',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 100,
        paddingBottom: 100,
        height: '100vh',
      }}
    >
      <img
        src={require('../../../public/assets/logo/ramblewhite.png')}
        style={{ width: '50vw', margin: 50 }}
      />
    </div>
  );
};

export default ActivitiesBoard;
