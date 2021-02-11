import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function SearchBar(props) {
  const [ip, setIp] = useState('');
  const [initialIp, setInitialIp] = useState('');
  const updateIp = (val) => {
    setIp(val);
    return;
  };

  useEffect(() => {
    axios
      .get('https://api.ipify.org/?format=json')
      .then((res) => setInitialIp(res.data.ip))
      .then(() => {
        searchAddress();
      });
  }, []);

  const searchAddress = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (!ip) {
      let url = `https://geo.ipify.org/api/v1?apiKey=at_LGA5u5pZGHRVw3BP7jegnvYmRK7gj&ipAddress=${initialIp}`;
      axios
        .get(url)
        .then((res) => {
          console.log(res.data);
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
