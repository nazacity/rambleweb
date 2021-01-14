import React, { Fragment } from 'react';

// MUI
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';

export default class ComponentToPrint extends React.Component {
  render() {
    return (
      <div
        style={{
          width: 370,
          height: 280,
          border: '1px solid #000',
          borderRadius: 20,
          padding: 10,
        }}
      >
        {this.props.data && (
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography>{this.props.data.activity?.course.title}</Typography>
              <Typography>{this.props.data.size?.size}</Typography>
              <Typography>{this.props.data.size?.description}</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography style={{ marginRight: 10 }}>
                ผู้ส่ง: {this.props.senderAddress?.name}
              </Typography>
              <Typography style={{ width: 200 }}>
                {this.props.senderAddress?.address}
              </Typography>
              <Typography>
                {this.props.senderAddress?.province}{' '}
                {this.props.senderAddress?.zip}
              </Typography>
              <Typography>{this.props.senderAddress?.phone_number}</Typography>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: 'flex' }}>
                <Typography style={{ marginRight: 10 }}>
                  ผู้รับ: {this.props.data.user?.first_name}
                </Typography>
                <Typography>{this.props.data.user?.last_name}</Typography>
              </div>
              <Typography>{this.props.data.address?.address}</Typography>
              <Typography>
                {this.props.data.address?.province}{' '}
                {this.props.data.address?.zip}
              </Typography>
              <Typography>{this.props.data.user?.phone_number}</Typography>
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}
