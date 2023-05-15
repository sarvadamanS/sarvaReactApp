import React, { useState } from "react";
import Controller from "./Dashboard/Controller";
import Graph from "./Dashboard/Graph";
import Map from "./Dashboard/Map";
import NavBar from "./UI/NavBar";
import "./index.css";
import Card from "./UI/Card";

function Dashboard() {
  let [graphdata, setGraphData] = useState();
  const recieveData = (data) => {
    setGraphData(data);
  };
  return (
    <>
      <NavBar />
      <Card className="dashboard">
        <Controller onRecieveData={recieveData}></Controller>
        <Map></Map>
        <Graph className="map" inputData={graphdata}></Graph>
      </Card>
    </>
  );
}

export default Dashboard;
