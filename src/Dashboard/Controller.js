import React, { useState } from "react";
import CallApi from "./CallApi";
import Button from "../UI/Button";
import "../index.css";

const Controller = (props) => {
  let classLabel = "inline-block mb-2 p-1 font-bold";
  let classInput =
    "inline-block rounded w-[auto] p-1 m-1 border-4 border-primary focus:outline-none focus:border-emerald-300";

  // Fetcher function
  let [loadData, setLoadData] = useState(true);
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
        args: enteredCountry.trim(),
      });
      return;
    }
    if (selectedReq === "date") {
      let inputDate = new Date(enteredDate);
      console.log(inputDate);
      setDataToLoad({
        apiMode: "date",
        apiUrl: "https://disease.sh/v3/covid-19/historical/all?lastdays=all",
        args: `${inputDate.getMonth() + 1}/${inputDate.getDate()}/${String(
          inputDate.getFullYear()
        ).slice(2)}`,
      });
      return;
    }
    setDataToLoad({
      apiMode: "world",
      apiUrl: "https://disease.sh/v3/covid-19/all",
      args: [],
    });
  };
  const DataHandler = (data, mode) => {
    props.onRecieveData(data, mode);
    setLoadData(false);
  };
  return (
    <div>
      {loadData ? (
        <CallApi changeData={dataToload} onDataRecieve={DataHandler}></CallApi>
      ) : (
        ""
      )}

      <form className="  m-1 p-1 text-center">
        <Button
          className="m-2 p-2"
          onClick={formClickHandler}
          dataKeyid="world"
        >
          Show world data
        </Button>{" "}
        <hr></hr>
        <label className={classLabel} htmlFor="country">
          Country
        </label>
        <input
          className={classInput}
          id="country"
          type="text"
          value={enteredCountry}
          onChange={updateCountry}
        ></input>{" "}
        <Button
          className="m-2 p-2"
          onClick={formClickHandler}
          dataKeyid="country"
        >
          Show country data
        </Button>
        <hr></hr>
        <label className={classLabel} htmlFor="date">
          Date:
        </label>
        <input
          className={classInput}
          id="date"
          type="date"
          value={enteredDate}
          onChange={updateDate}
        ></input>
        <Button className="m-2 p-2" onClick={formClickHandler} dataKeyid="date">
          Show date data
        </Button>
      </form>
    </div>
  );
};
export default Controller;
