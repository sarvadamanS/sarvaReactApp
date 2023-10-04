import React, { useState, useEffect } from "react";
import Controller from "./Dashboard/Controller";
import Graph from "./Dashboard/Graph";
import Map from "./Dashboard/Map";
import NavBar from "./UI/NavBar";
import "./index.css";
import Card from "./UI/Card";
function Dashboard() {
  return (
    <>
      <NavBar />
      <Card className="grid min-h-min max-w-[90%] w-fit">
        <b className="text-center text-2xl">Find Data of Countries:</b>
        <Controller></Controller>
        <br></br>
        <div className="vis-elements ">
          <Graph></Graph>
          <Map></Map>
        </div>
      </Card>
    </>
  );
}

export default Dashboard;
