import React, { useState } from 'react';
import { Typography, TextField, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const Filter = ({ getPartners }) => {
  const [filter, setFilter] = useState({
    display_name: '',
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
