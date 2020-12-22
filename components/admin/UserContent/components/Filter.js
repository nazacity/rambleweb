import React, { useState } from 'react';
import { Typography, TextField, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const Filter = ({ getPartners }) => {
  const [filter, setFilter] = useState({
    display_name: '',
    last_name: '',
    first_name: '',
    gender: '',
    min_age: '',
    max_age: '',
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
        display: 'flex',
        padding: 30,
        borderBottom: '1px solid black',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4">Filter</Typography>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginLeft: 50 }}>
          <TextField
            label="Display Name"
            name="display_name"
            variant="outlined"
            value={filter.display_name}
            onChange={handleChange}
            size="small"
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
          />
        </div>
        <div style={{ marginLeft: 50 }}>
          <TextField
            label="Gender"
            name="gender"
            variant="outlined"
            value={filter.gender}
            onChange={handleChange}
            size="small"
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
          />
        </div>
        <div style={{ marginLeft: 10 }}>
          <IconButton onClick={() => getPartners(0, filter)}>
            <Search />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Filter;
