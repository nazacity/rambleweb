import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { LocationOn, ArrowBack, Edit } from '@material-ui/icons';
import ModalImage from 'react-modal-image';
import Link from '../../../../../src/Link';

import moment from 'moment';
import 'moment/locale/th';
moment.locale('th');

import TimelineDisplay from '../activitydetail/TimelineDisplay';
import ReactMarkdown from 'react-markdown';

const ActivityPreview = ({ activityDetail }) => {
  return (
    <div
      style={{
        width: 600,
        padding: 20,
        alignSelf: 'center',
      }}
    >
      <div style={{ marginBottom: 40 }}>
        <div
          style={{
            height: 400,
            width: 600,
            borderRadius: 20,
            overflow: 'hidden',
          }}
        >
          <ModalImage
            style={{
              height: 400,
              width: 600,
              borderRadius: 20,
            }}
            small={activityDetail.activity_picture_url}
            large={activityDetail.activity_picture_url}
          />
        </div>
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h4">{activityDetail.title}</Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5">{activityDetail.sub_title}</Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" style={{ marginTop: 20 }}>
            {activityDetail.description}
          </Typography>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link
          href={`https://www.google.com/maps/search/?api=1&query=${activityDetail.location.lat},${activityDetail.location.lng}`}
          target="_blank"
        >
          <div
            style={{
              width: 120,
              height: 120,
              backgroundColor: '#fce4ec',
              borderRadius: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            <IconButton size="medium">
              <LocationOn style={{ fontSize: 40 }} />
            </IconButton>
          </div>
        </Link>
        <div style={{ marginLeft: 20, display: 'flex' }}>
          <div style={{ marginRight: 20 }}>
            <Typography>จังหวัด</Typography>
            <Typography>สถานที่</Typography>
          </div>
          <div>
            <Typography>{activityDetail.location.province}</Typography>
            <Typography>{activityDetail.location.place_name}</Typography>
          </div>
          <div></div>
        </div>
      </div>
      <div style={{ margin: '20px auto' }}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h4">วันงาน</Typography>
          <IconButton>
            <Edit />
          </IconButton>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>
          <Typography>
            {moment(activityDetail.actual_date).format('DD MMMM YYYY')}
          </Typography>
        </div>
      </div>
      <div style={{ margin: '20px auto' }}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h4">วันที่เปิดรับสมัคร</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>
          <Typography>
            {moment(activityDetail.register_start_date).format('DD MMMM YYYY')}
          </Typography>
          <Typography style={{ margin: '0 10px' }}>-</Typography>
          <Typography>
            {moment(activityDetail.register_end_date).format('DD MMMM YYYY')}
          </Typography>
        </div>
      </div>
      <div style={{ margin: '20px auto' }}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h4">คอร์สวิ่ง</Typography>
        </div>
        {activityDetail.courses.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: 200,
                  height: 200,
                  overflow: 'hidden',
                }}
              >
                <ModalImage
                  small={item.course_picture_url}
                  large={item.course_picture_url}
                />
              </div>
              <div>
                <Typography style={{ marginLeft: 20 }}>{item.title}</Typography>
                <Typography style={{ marginLeft: 20 }}>
                  ค่าสมัคร {item.price} บาท
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ margin: '20px auto' }}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h4">รายละเอียดกำหนดการ</Typography>
        </div>
        <TimelineDisplay data={activityDetail.timeline} />
      </div>
      {activityDetail.gifts.length > 0 && (
        <div style={{ margin: '20px auto' }}>
          <div style={{ display: 'flex' }}>
            <Typography variant="h4">รางวัลของที่ระลึก</Typography>
          </div>
          <div style={{ display: 'flex' }}>
            {activityDetail.gifts.map((item, index) => {
              return (
                <div style={{ marginRight: 10 }} key={index}>
                  <div
                    style={{
                      width: 200,
                      height: 200,
                    }}
                  >
                    <ModalImage
                      small={item.gift_picture_url}
                      large={item.gift_picture_url}
                    />
                  </div>
                  <Typography style={{ textAlign: 'center' }}>
                    {item.description}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div style={{ margin: '20px auto' }}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h4">แบบเสื้อ</Typography>
        </div>
        <div style={{ display: 'flex' }}>
          {activityDetail.shirt_detail.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginRight: 10,
                  justifyContent: 'center',
                  width: 200,
                  height: 200,
                }}
              >
                <ModalImage
                  small={item.shirt_picturl_url}
                  large={item.shirt_picturl_url}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ margin: '20px auto' }}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h4">ไซส์เสื้อ</Typography>
        </div>
        {activityDetail.size.map((size, index) => {
          return (
            <div key={index}>
              <Typography>
                {size.size} {size.description}
              </Typography>
            </div>
          );
        })}
      </div>
      <div style={{ margin: '20px auto' }}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h4">กติการางวัล</Typography>
        </div>
        <div style={{ paddingLeft: 20 }}>
          {activityDetail.rules.map((item, index) => {
            return (
              <div
                key={index}
                style={{ paddingHorizontal: 20, marginBottom: 5 }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'red',
                      width: 10,
                      height: 10,
                      borderRadius: 10,
                      marginRight: 10,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <Typography>{item.title}</Typography>
                  </div>
                </div>
                <div style={{ paddingLeft: 40 }}>
                  {item.detail &&
                    item.detail.map((item, index) => {
                      return (
                        <div key={index}>
                          <Typography>{item.description}</Typography>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ margin: '20px auto' }}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h4">กฏ</Typography>
        </div>
        <div style={{ paddingLeft: 20 }}>
          <ReactMarkdown source={activityDetail.rules1} />
        </div>
      </div>
      <div style={{ margin: '20px auto' }}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h4">รายละเอียดเพิ่มเติม</Typography>
        </div>
        <div style={{ paddingLeft: 20 }}>
          <ReactMarkdown source={activityDetail.more_detail} />
        </div>
      </div>
      <div style={{ paddingLeft: 20 }}>
        <ReactMarkdown source={activityDetail.condition} />
      </div>
    </div>
  );
};

export default ActivityPreview;
