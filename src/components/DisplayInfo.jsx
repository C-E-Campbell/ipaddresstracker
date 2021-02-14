import React from 'react';
import styles from '../styles/DisplayInfo.module.scss';
export default function DisplayInfo(props) {
  return (
    <div className={styles.displayInfoBox}>
      {props.info ? (
        <div className={styles.infoContainer}>
          <div className={styles.innerContainer}>
            <h4>IP ADDRESS</h4>
            {`${props.info.ip}`}
          </div>
          <div className={styles.innerContainer}>
            <h4>LOCATION</h4>
            {`${props.info.city}, ${props.info.region} ${props.info.postalCode}`}
          </div>
          <div className={styles.innerContainer}>
            <h4>TIMEZONE</h4>
            {`UTC ${props.info.timezone}`}
          </div>
          <div className={styles.innerContainer}>
            <h4>ISP</h4>
            {`${props.info.isp}`}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
