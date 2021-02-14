import React from 'react';
import styles from '../styles/DisplayInfo.module.scss';
export default function DisplayInfo(props) {
  return (
    <div className={styles.displayInfoBox}>
      {props.info ? (
        <div className={styles.infoContainer}>
          <div className={styles.innerContainer}>
            Ip Address{`${props.info.ip}`}
          </div>
          <div>{`${props.info.city}, ${props.info.region} ${props.info.postalCode}`}</div>
          <div>{`UTC ${props.info.timezone}`}</div>
          <div>{`${props.info.isp}`}</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
