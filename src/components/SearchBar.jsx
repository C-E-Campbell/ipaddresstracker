import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/SearchBar.module.scss';
export default function SearchBar(props) {
  const [ip, setIp] = useState('');

  const updateIp = (val) => {
    setIp(val);
    return;
  };

  useEffect(() => {
    axios
      .get(
        'https://geo.ipify.org/api/v1?apiKey=at_LGA5u5pZGHRVw3BP7jegnvYmRK7gj'
      )
      .then((res) => setIp(res.data.ip))
      .then(() => {
        searchAddress();
      });
  }, []);

  const searchAddress = (e) => {
    if (e) {
      e.preventDefault();
    }

    if (ip.includes('com')) {
      let url = `https://geo.ipify.org/api/v1?apiKey=at_LGA5u5pZGHRVw3BP7jegnvYmRK7gj&domain=${ip}`;
      axios
        .get(url)
        .then((res) => {
          props.getIpInfo(res.data);
        })
        .catch((err) => props.getIpInfo(err));
    } else {
      let url = `https://geo.ipify.org/api/v1?apiKey=at_LGA5u5pZGHRVw3BP7jegnvYmRK7gj&ipAddress=${ip}`;
      axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          props.getIpInfo(res.data);
        })
        .catch((err) => props.getIpInfo(err));
    }
  };

  return (
    <form>
      <input
        placeholder="Seach for any IP address or domain"
        onChange={(e) => updateIp(e.target.value)}
        value={ip}
      />
      <button onClick={(e) => searchAddress(e)}>search</button>
    </form>
  );
}
