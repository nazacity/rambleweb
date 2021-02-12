import React, { useState } from 'react';
import { Typography, TextField, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import Select from 'react-select';
import { gender, identity_state, vaccine_state } from 'constants/user';

const Filter = ({ getPartners }) => {
  const [filter, setFilter] = useState({
    display_name: '',
    last_name: '',
    first_name: '',
    gender: '',
    min_age: '',
    max_age: '',
    identity: '',
    vaccine: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
    if (value === '') {
      getPartners(0);
    }
  };

  return (
    <div
      style={{
        padding: 30,
        borderBottom: '1px solid black',
      }}
    >
      <Typography variant="h4">Filter</Typography>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <div style={{ marginLeft: 50 }}>
          <TextField
            label="Display Name"
            name="display_name"
            variant="outlined"
            value={filter.display_name}
            onChange={handleChange}
            size="small"
            style={{ width: 300 }}
          />
        </div>
        <div style={{ marginLeft: 50 }}>
          <TextField
            label="First Name"
            name="first_name"
            variant="outlined"
            value={filter.first_name}
            onChange={handleChange}
            size="small"
            style={{ width: 300 }}
          />
        </div>
        <div style={{ marginLeft: 50 }}>
          <TextField
            label="Last Name"
            name="last_name"
            variant="outlined"
            value={filter.last_name}
            onChange={handleChange}
            size="small"
            style={{ width: 300 }}
          />
        </div>
        <div style={{ marginLeft: 10 }}>
          <IconButton onClick={() => getPartners(0, filter)}>
            <Search />
          </IconButton>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <div style={{ marginLeft: 50 }}>
          <Select
            placeholder="Gender"
            value={filter.gender}
            options={[{ label: 'ทั้งหมด', value: '' }, ...gender]}
            onChange={(e) => {
              setFilter({ ...filter, gender: e });
            }}
            styles={{
              control: (styles) => ({
                ...styles,
                backgroundColor: 'white',
                height: 50,
                width: 300,
              }),
              container: (styles) => ({
                ...styles,
                width: '100%',
                height: 50,
                zIndex: 501,
              }),
            }}
          />
        </div>
        <div style={{ marginLeft: 50 }}>
          <TextField
            label="Min Age"
            name="min_age"
            variant="outlined"
            value={filter.min_age}
            onChange={handleChange}
            size="small"
            style={{ width: 300 }}
          />
        </div>
        <div style={{ marginLeft: 50 }}>
          <TextField
            label="Max Age"
            name="max_age"
            variant="outlined"
            value={filter.max_age}
            onChange={handleChange}
            size="small"
            style={{ width: 300 }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <div style={{ marginLeft: 50 }}>
          <Select
            placeholder="Identity verify state"
            value={filter.identity}
            options={[{ label: 'ทั้งหมด', value: '' }, ...identity_state]}
            onChange={(e) => {
              setFilter({ ...filter, identity: e });
            }}
            styles={{
              control: (styles) => ({
                ...styles,
                backgroundColor: 'white',
                height: 50,
                width: 300,
              }),
              container: (styles) => ({
                ...styles,
                width: '100%',
                height: 50,
                zIndex: 500,
              }),
            }}
          />
        </div>
        <div style={{ marginLeft: 50 }}>
          <Select
            placeholder="Covid vaccine verify state"
            value={filter.vaccine}
            options={[{ label: 'ทั้งหมด', value: '' }, ...vaccine_state]}
            onChange={(e) => {
              setFilter({ ...filter, vaccine: e });
            }}
            styles={{
              control: (styles) => ({
                ...styles,
                backgroundColor: 'white',
                height: 50,
                width: 300,
              }),
              container: (styles) => ({
                ...styles,
                width: '100%',
                height: 50,
                zIndex: 500,
              }),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
