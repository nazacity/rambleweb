import React from 'react';
import QRCode from 'qrcode.react';
import { Typography } from '@material-ui/core';

export default class ComponentToPrint extends React.Component {
  render() {
    return (
      <div
        style={{
          height: 1000,
          width: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography style={{ textAlign: 'center' }} variant="h4">
          {this.props.item.title}
        </Typography>
        <QRCode
          value={this.props.item._id}
          imageSettings={{
            src: this.props.item.picture_url,
            height: 50,
            width: 50,
            excavate: true,
          }}
          size={600}
        />
      </div>
    );
  }
}
