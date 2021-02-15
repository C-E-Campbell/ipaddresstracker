import React from 'react';
import styles from '../styles/DisplayInfo.module.scss';
export default function DisplayInfo(props) {
  return (
    <div className={styles.displayInfoBox}>
      <div className={styles.infoContainer}>
        <div className={styles.innerContainer}>
          <h4>IP ADDRESS</h4>
          {props.searching ? `Searching for IP` : `${props.info.ip}`}
        </div>
        <div className={styles.innerContainer}>
          <h4>LOCATION</h4>

          {!props.searching
            ? `${props.info.city}, ${props.info.region} ${props.info.postalCode}`
            : 'Finding Location'}
        </div>
        <div className={styles.innerContainer}>
          <h4>TIMEZONE</h4>
          {!props.searching
            ? `UTC ${props.info.timezone}`
            : 'The timezone is...'}
        </div>
        <div className={styles.innerContainer}>
          <h4>ISP</h4>
          {!props.searching ? `${props.info.isp}` : 'Looking up the ISP'}
        </div>
      </div>
    </div>
  );
}
