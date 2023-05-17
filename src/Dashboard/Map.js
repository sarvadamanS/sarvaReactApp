import React, { useEffect } from "react";
import L from "leaflet";
import { MapContainer, useMap, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../index.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;
const RecenterAutomatically = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
    // map.setZoom(3);
  }, [lat, lng]);
  return null;
};
const Map = (props) => {
  let curMode = props.inputData[1];
  let apiData = props.inputData[0];
  let dataObj = {
    country: "",
    active: "",
    recovered: "",
    deaths: "",
    countryInfo: "",
  };
  let markers = "",
    lat = 0,
    lng = 0;

  if (curMode === "country") {
    dataObj.country = apiData.country;
    dataObj.countryInfo = apiData.countryInfo;
    dataObj.active = apiData.active;
    dataObj.recovered = apiData.recovered;
    dataObj.deaths = apiData.deaths;
    console.log(dataObj);

    lat = dataObj.countryInfo.lat;
    lng = dataObj.countryInfo.long;
    markers = (
      <Marker position={[dataObj.countryInfo.lat, dataObj.countryInfo.long]}>
        <Popup>
          Country:{dataObj.country} <br /> Active:{dataObj.active} <br />{" "}
          Recovered:{dataObj.recovered} <br /> Deaths:{dataObj.deaths} <br />
        </Popup>
      </Marker>
    );
  }
  return (
    <>
      <MapContainer
        className="map"
        style={{
          width:
            window.innerWidth >= 700
              ? window.innerWidth / 2.75
              : window.innerWidth / 1.2,
          height: window.innerHeight / 2,
        }}
        center={[0, 0]}
        zoom={3}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
        <RecenterAutomatically lat={lat} lng={lng} />
      </MapContainer>
    </>
  );
};
export default Map;
