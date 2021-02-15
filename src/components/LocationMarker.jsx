import { useState, useRef, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from 'react-leaflet';

export default function LocationMarker(props) {
  const [position, setPosition] = useState(null);
  const map = useMapEvent({});
  useEffect(() => {
    setPosition({ lat: props.newLocation.lat, lng: props.newLocation.lng });
    map.flyTo(
      { lat: props.newLocation.lat, lng: props.newLocation.lng },
      map.getZoom()
    );
  }, [props.newLocation.lat]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Location Found.</Popup>
    </Marker>
  );
}
