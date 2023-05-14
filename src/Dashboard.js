import React, { useState } from "react";
import Controller from "./Dashboard/Controller";
import Graph from "./Dashboard/Graph";
import Map from "./Dashboard/Map";
import NavBar from "./UI/NavBar";
import "./index.css";
import Card from "./UI/Card";

function Dashboard() {
  let [graphdata, setGraphData] = useState();
  const recieveData = (data, mode) => {
    // console.log(data);
    // if (mode === "country") {
    //   console.log(data);
    //   for (const key in data) {
    //     console.log(`${key}: ${data[key]}`);
    //   }
    //   return;
    // }
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
