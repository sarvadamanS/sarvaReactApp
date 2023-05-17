import React, { useState } from "react";
import Controller from "./Dashboard/Controller";
import Graph from "./Dashboard/Graph";
import Map from "./Dashboard/Map";
import NavBar from "./UI/NavBar";
import "./index.css";
import Card from "./UI/Card";

function Dashboard() {
  let [graphdata, setGraphData] = useState([null, "world"]);
  const recieveData = (data, mode) => {
    setGraphData([data, mode]);
  };
  return (
    <>
      <NavBar />
      <Card className="grid max-w-[90%] w-fit">
        <b className="text-center text-2xl">Find live Covid Data:</b>
        <Controller onRecieveData={recieveData}></Controller>
        <br></br>
        <div className="vis-elements ">
          <Graph inputData={graphdata}></Graph>
          <Map inputData={graphdata}></Map>
        </div>
      </Card>
    </>
  );
}

export default Dashboard;
