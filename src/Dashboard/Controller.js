import React, { useState } from "react";
import CallApi from "./CallApi";
import Button from "../UI/Button";
import "./Controller.css";

const Controller = (props) => {
  // Fetcher function
  let [dataToload, setDataToLoad] = useState("world");
  const formClickHandler = (e) => {
    console.log(e.target.dataset.keyid);
    setDataToLoad(e.target.dataset.keyid);
  };
  const DataHandler = (data, apiMode) => {
    // console.log(data, apiMode);
    props.onRecieveData(data, apiMode);
  };
  return (
    <div>
      <CallApi changeData={dataToload} onDataRecieve={DataHandler}></CallApi>
      <h1>Find live Covid Data:</h1>
      <form className="submit-form">
        <Button onClick={formClickHandler} dataKeyid="world">
          Show world data
        </Button>
        <label htmlFor="country">Country</label>
        <input id="country" type="text"></input>
        <Button onClick={formClickHandler} dataKeyid="country">
          Show country data
        </Button>
        <label htmlFor="date">Date</label>
        <input id="date" type="date"></input>
        <Button onClick={formClickHandler} dataKeyid="date">
          Show date data
        </Button>
      </form>
    </div>
  );
};
export default Controller;
