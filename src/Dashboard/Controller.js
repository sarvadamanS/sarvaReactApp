import React, { useState } from "react";
import CallApi from "./CallApi";
import Button from "../UI/Button";
import "./Controller.css";

const Controller = (props) => {
  // Fetcher function
  let [loadData, setLoadData] = useState(false);
  let [enteredCountry, setEnteredCountry] = useState("");
  let [enteredDate, setEnteredDate] = useState("");
  const updateCountry = (e) => {
    setEnteredCountry(e.target.value);
  };
  const updateDate = (e) => {
    setEnteredDate(e.target.value);
  };
  let [dataToload, setDataToLoad] = useState({
    apiMode: "world",
    apiUrl: "https://disease.sh/v3/covid-19/all",
    args: [],
  });
  const formClickHandler = (e) => {
    setLoadData(true);
    let selectedReq = e.target.dataset.keyid;
    if (selectedReq === "country") {
      setDataToLoad({
        apiMode: "country",
        apiUrl: "https://disease.sh/v3/covid-19/countries",
        args: enteredCountry,
      });
      return;
    }
    if (selectedReq === "date") {
      let inputDate = new Date(enteredDate);

      setDataToLoad({
        apiMode: "date",
        apiUrl: "https://disease.sh/v3/covid-19/historical/all?lastdays=all",
        args: `${inputDate.getDate()}/${inputDate.getMonth()}/${inputDate.getFullYear()}`,
      });
      return;
    }
    setDataToLoad({
      apiMode: "world",
      apiUrl: "https://disease.sh/v3/covid-19/all",
      args: [],
    });
  };
  const DataHandler = (data) => {
    props.onRecieveData(data);
    setLoadData(false);
  };
  return (
    <div>
      {loadData ? (
        <CallApi changeData={dataToload} onDataRecieve={DataHandler}></CallApi>
      ) : (
        ""
      )}
      <h1>Find live Covid Data:</h1>
      <Button onClick={formClickHandler} dataKeyid="world">
        Show world data
      </Button>
      <form className="submit-form">
        <label htmlFor="country">Country</label>
        <input
          id="country"
          type="text"
          value={enteredCountry}
          onChange={updateCountry}
        ></input>
        <Button onClick={formClickHandler} dataKeyid="country">
          Show country data
        </Button>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={enteredDate}
          onChange={updateDate}
        ></input>
        <Button onClick={formClickHandler} dataKeyid="date">
          Show date data
        </Button>
      </form>
    </div>
  );
};
export default Controller;
