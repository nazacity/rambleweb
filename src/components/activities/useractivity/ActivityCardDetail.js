import { CardActionArea, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/th';
import Link from 'Link';

const ActivityCardDetail = ({ item, index, state }) => {
  const lang = useSelector((state) => state.layout.lang);
  moment.locale(lang);
  return (
    <Link href={`/activities?activity=${item._id}`}>
      <CardActionArea
        style={{
          width: '80vw',
          height: '50vw',
          borderRadius: 10,
          overflow: 'hidden',
          backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.3),rgba(0,0,0,1)),url('${item.activity_picture_url}')`,
          backgroundSize: 'cover',
          margin: '20px auto',
        }}
      >
        <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
          <Typography variant="h6" style={{ color: '#fff' }}>
            {item.title}
          </Typography>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Typography
              variant="body2"
              style={{ color: '#fff', marginRight: 10, fontSize: 14 }}
            >
              {state === 'waiting_payment' && 'กรุณาชำระเงิน'}
              {state === 'upcoming' && 'Upcoming'}
            </Typography>
          </div>
          <Typography style={{ color: '#fff' }}>
            {moment(item.actual_date).fromNow()}
          </Typography>
        </div>
      </CardActionArea>
      {/* {(index + 1) % 5 === 0 && <MinorAdvertise />} */}
    </Link>
  );
};

export default ActivityCardDetail;
