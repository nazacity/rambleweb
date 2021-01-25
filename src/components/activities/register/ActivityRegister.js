import activity from 'constants/activity';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  useTheme,
  Button,
} from '@material-ui/core';
import axios from 'axios';
import { api } from 'api/api';
import { updateUserActivity } from '../../../../redux/actions/lineAction';

const ActivityRegister = ({ handleClose, userActivity, setUserActivity }) => {
  const activity = useSelector((state) => state.line.activity);
  const user = useSelector((state) => state.line.user);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    course: {},
    size: {},
    address: {},
  });

  const [address, setAddress] = useState({
    phone_number: '',
    address: '',
    province: '',
    zip: '',
  });
  const [emergency, setEmergency] = useState({
    name: '',
    relationship: '',
    phone_number: '',
  });
  const [error, setError] = useState({
    address: {},
    emergency: {},
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
    setError({ ...error, address: { ...error.address, [name]: '' } });
  };

  const handleChange1 = (event) => {
    const { name, value } = event.target;
    setEmergency({ ...emergency, [name]: value });
    setError({ ...error, emergency: { ...error.emergency, [name]: '' } });
  };

  const onSubmit = async () => {
    let address1;
    let province;
    let zip;
    let phone_number;
    let name;
    let relationship;
    let phone_number1;
    if (state.address._id === 'new') {
      if (!address.address) {
        address1 = 'กรุณาใส่ที่อยู่';
      }
      if (!address.province) {
        province = 'กรุณาใส่จังหวัด';
      }
      if (!address.zip) {
        zip = 'กรุณาใส่รหัสไปรษณีย์';
      }
      if (!address.phone_number) {
        phone_number = 'กรุณาใส่เบอร์โทรศัพท์';
      }
    }
    if (!emergency.name) {
      name = 'กรุณาใส่ชื่อผู้ติดต่อฉุกเฉิน';
    }
    if (!emergency.phone_number) {
      phone_number1 = 'กรุณาใส่เบอร์โทรศัพท์ผู้ติดต่อฉุกเฉิน';
    }
    if (!emergency.relationship) {
      relationship = 'กรุณาใส่ความสัมพันธ์';
    }
    if (
      address1 ||
      province ||
      zip ||
      phone_number ||
      name ||
      relationship ||
      phone_number1
    ) {
      setError({
        address: {
          address: address1,
          province,
          zip,
          phone_number,
        },
        emergency: {
          name,
          relationship,
          phone_number: phone_number1,
        },
      });
      return;
    }
    const data = {
      user: user._id,
      activity: {
        id: activity._id, // activity id
        course: {
          _id: state.course._id,
          title: state.course.title,
          range: state.course.range,
          price: state.course.price,
          course_picture_url: state.course.course_picture_url,
        },
      },
      size: {
        id: state.size.id,
        size: state.size.size,
        description: state.size.description,
      },
      idcard: user.idcard,
      address: {
        _id: state.address._id,
        address: address.address,
        province: address.province,
        zip: address.zip,
        phone_number: address.phone_number,
      },
      emergency: emergency,
      announcement: activity.announcement,
    };

    const res = await axios.post(
      `${api}/api/everyone/createuseradressemergencyactivity`,
      data
    );

    // set user activities
    console.log(res.data.data);
    dispatch(updateUserActivity(res.data.data));
    setUserActivity({ ...res.data.data, state: 'waiting_payment' });
    handleClose();
  };
  const theme = useTheme();
  return (
    <div style={{ margin: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            backgroundColor: theme.palette.primary.main,
            width: 10,
            height: 10,
            borderRadius: 10,
            marginRight: 10,
          }}
        ></div>
        <Typography variant="h6" color="primary">
          คอร์สวิ่ง
        </Typography>
      </div>
      <div style={{ marginLeft: 20 }}>
        {activity.courses.map((item, index) => {
          return (
            <div
              key={index}
              style={{ display: 'flex' }}
              onClick={() => {
                setState({ ...state, course: item });
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.course._id === item._id ? true : false}
                    onChange={() => {
                      setState({ ...state, course: item });
                    }}
                    name="checkedB"
                    color="primary"
                    style={{ margin: '10px 0' }}
                  />
                }
                label={
                  <div>
                    <Typography>{item.title}</Typography>
                    <Typography>ค่าสมัคร {item.price} บาท </Typography>
                  </div>
                }
              />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            backgroundColor: theme.palette.primary.main,
            width: 10,
            height: 10,
            borderRadius: 10,
            marginRight: 10,
          }}
        ></div>
        <Typography variant="h6" color="primary">
          ไซส์เสื้อ
        </Typography>
      </div>
      <div style={{ marginLeft: 20 }}>
        {activity.size.map((item, index) => {
          return (
            <div key={index} style={{ display: 'flex' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.size._id === item._id ? true : false}
                    onChange={() => {
                      setState({ ...state, size: item });
                    }}
                    name="checkedB"
                    color="primary"
                    style={{ margin: '10px 0' }}
                  />
                }
                label={
                  <div>
                    <Typography>{item.size}</Typography>
                    <Typography>{item.description}</Typography>
                  </div>
                }
              />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            backgroundColor: theme.palette.primary.main,
            width: 10,
            height: 10,
            borderRadius: 10,
            marginRight: 10,
          }}
        ></div>
        <Typography variant="h6" color="primary">
          ที่อยู่จัดส่ง
        </Typography>
      </div>
      <div style={{ marginLeft: 20 }}>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={
                  state.address._id === '5ff6600d20ed83388ab4ccbd'
                    ? true
                    : false
                }
                onChange={() => {
                  setState({
                    ...state,
                    address: { _id: '5ff6600d20ed83388ab4ccbd' },
                  });
                }}
                name="checkedB"
                color="primary"
                style={{ margin: '10px 0' }}
              />
            }
            label={
              <div>
                <Typography>รับที่งาน</Typography>
              </div>
            }
          />
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.address._id === 'new' ? true : false}
                onChange={() => {
                  setState({
                    ...state,
                    address: { _id: 'new' },
                  });
                }}
                name="checkedB"
                color="primary"
                style={{ margin: '10px 0' }}
              />
            }
            label={
              <div>
                <Typography>จัดส่งที่อื่น</Typography>
              </div>
            }
          />
        </div>
        {state.address._id === 'new' && (
          <div>
            <TextField
              value={address.address}
              variant="outlined"
              onChange={handleChange}
              label="ที่อยู่"
              name="address"
              style={{ width: '100%', marginBottom: 20 }}
              multiline
              error={error.address.address ? true : false}
              helperText={error.address.address}
            />
            <TextField
              value={address.province}
              variant="outlined"
              onChange={handleChange}
              label="จังหวัด"
              name="province"
              style={{ width: '100%', marginBottom: 20 }}
              error={error.address.province ? true : false}
              helperText={error.address.province}
            />
            <TextField
              value={address.zip}
              variant="outlined"
              onChange={handleChange}
              label="รหัสไปรษณีย์"
              name="zip"
              style={{ width: '100%', marginBottom: 20 }}
              error={error.address.zip ? true : false}
              helperText={error.address.zip}
            />
            <TextField
              value={address.phone_number}
              variant="outlined"
              onChange={handleChange}
              label="เบอร์โทรศัพท์"
              name="phone_number"
              style={{ width: '100%', marginBottom: 20 }}
              error={error.address.phone_number ? true : false}
              helperText={error.address.phone_number}
            />
          </div>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            backgroundColor: theme.palette.primary.main,
            width: 10,
            height: 10,
            borderRadius: 10,
            marginRight: 10,
          }}
        ></div>
        <Typography variant="h6" color="primary">
          การติดต่อฉุกเฉิน
        </Typography>
      </div>
      <div style={{ marginLeft: 20, marginTop: 20 }}>
        <TextField
          value={emergency.name}
          variant="outlined"
          onChange={handleChange1}
          label="ชื่อ"
          name="name"
          style={{ width: '100%', marginBottom: 20 }}
          error={error.emergency.name ? true : false}
          helperText={error.emergency.name}
        />
        <TextField
          value={emergency.phone_number}
          variant="outlined"
          onChange={handleChange1}
          label="เบอร์โทรศัพท์"
          name="phone_number"
          style={{ width: '100%', marginBottom: 20 }}
          error={error.emergency.phone_number ? true : false}
          helperText={error.emergency.phone_number}
        />
        <TextField
          value={emergency.relationship}
          variant="outlined"
          onChange={handleChange1}
          label="ความสัมพันธ์"
          name="relationship"
          style={{ width: '100%', marginBottom: 20 }}
          error={error.emergency.relationship ? true : false}
          helperText={error.emergency.relationship}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={onSubmit}
          style={{ width: '80%' }}
        >
          สมัคร
        </Button>
      </div>
    </div>
  );
};

//'5ff6600d20ed83388ab4ccbd'

export default ActivityRegister;
