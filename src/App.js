import SearchBar from './components/SearchBar.jsx';
import styles from './App.module.scss';
import DisplayInfo from './components/DisplayInfo.jsx';
import { useState, useRef, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from 'react-leaflet';
import LocationMarker from './components/LocationMarker.jsx';

function App() {
  const [ipInfo, SetIpInfo] = useState('');
  const [searching, SetSearching] = useState(true);
  const updateIpInfo = (data) => {
    const ip = {
      ip: data.ip,
      timezone: data.location.timezone,
      city: data.location.city,
      region: data.location.region,
      country: data.location.country,
      postalCode: data.location.postalCode,
      lat: data.location.lat,
      lng: data.location.lng,
      isp: data.isp,
    };
    SetIpInfo(ip);
    SetSearching(false);
  };
  const isSearching = () => {
    SetSearching(!searching);
  };
  return (
    <div className={styles.header}>
      <div className={styles.header_textBox}>
        <h1>IP ADDRESS FINDER</h1>
        <SearchBar
          searching={searching}
          isSearching={isSearching}
          getIpInfo={updateIpInfo}
        />
        <DisplayInfo searching={searching} info={ipInfo} />
      </div>
      {ipInfo.lat ? (
        <MapContainer
          style={{ height: '500px' }}
          center={[ipInfo.lat, ipInfo.lng]}
          zoom={10}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <LocationMarker newLocation={ipInfo} />
        </MapContainer>
      ) : null}
    </div>
  );
}

export default App;
