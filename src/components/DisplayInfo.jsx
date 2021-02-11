import React from 'react';

export default function DisplayInfo(props) {
  return (
    <div>
      <div>{`${props.info.ip}`}</div>
      <div>{`${props.info.city}, ${props.info.region} ${props.info.postalCode}`}</div>
      <div>{`UTC ${props.info.timezone}`}</div>
      <div>{`${props.info.isp}`}</div>
    </div>
  );
}
