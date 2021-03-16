import React from 'react';
import ActivityCardDetail from './ActivityCardDetail';

const FilteredActivities = ({ filteredActivities }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {filteredActivities.map((item, index) => {
        return <ActivityCardDetail key={index} item={item} index={index} />;
      })}
    </div>
  );
};

export default FilteredActivities;
