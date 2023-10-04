import React, { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, useMap, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../index.css";
import { useSelector } from "react-redux";
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
  const dataReceivedBack = useSelector((state) => state.recievedData.value);
  let [mapData, setMapData] = useState();
  useEffect(() => {
    setMapData(dataReceivedBack);
  }, [dataReceivedBack]);
  if (!mapData)
    return (
      <>
        {" "}
        <h4 className="text-red-600"> Could not load the map </h4>
      </>
    );
  let curMode = mapData[1];
  let apiData = mapData[0];
  if (!apiData)
    return (
      <>
        {" "}
        <h4 className="text-red-600"> Could not load the map </h4>
      </>
    );
  let dataObj = {
    country: "",
    capital: "",
    population: "",
    continents: "",
    latlng: "",
  };
  let markers = "",
    lat = 0,
    lng = 0;
  if (curMode === "country") {
    if (!apiData.name.common) return;
    dataObj.country = apiData.name.common;
    dataObj.latlng = apiData.latlng;
    dataObj.capital = apiData.capital;
    dataObj.population = apiData.population;
    dataObj.continents = apiData.continents;
    console.log(dataObj);

    lat = dataObj.latlng[0];
    lng = dataObj.latlng[1];
    markers = (
      <Marker position={[lat, lng]}>
        <Popup>
          Country:{dataObj.country} <br /> Capital:{dataObj.capital} <br />{" "}
          population:{dataObj.population} <br /> Continents:{dataObj.continents}{" "}
          <br />
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
