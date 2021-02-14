import React from 'react';
import styles from '../styles/DisplayInfo.module.scss';
export default function DisplayInfo(props) {
  return (
    <div className={styles.displayInfoBox}>
      <div className={styles.infoContainer}>
        <div className={styles.innerContainer}>
          <h4>IP ADDRESS</h4>
          {props.info ? `${props.info.ip}` : 'Searching...'}
        </div>
        <div className={styles.innerContainer}>
          <h4>LOCATION</h4>

          {props.info
            ? `${props.info.city}, ${props.info.region} ${props.info.postalCode}`
            : 'Searching...'}
        </div>
        <div className={styles.innerContainer}>
          <h4>TIMEZONE</h4>
          {props.info ? `UTC ${props.info.timezone}` : 'Searching...'}
        </div>
        <div className={styles.innerContainer}>
          <h4>ISP</h4>
          {props.info ? `${props.info.isp}` : 'Searching...'}
        </div>
      </div>
    </div>
  );
}
