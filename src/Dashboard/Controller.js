import React, { useState } from "react";
import CallApi from "./CallApi";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { updateApiData } from "../slices/apiDataSlice";
import "../index.css";
const Controller = (props) => {
  let classLabel = "inline-block mb-2 p-1 font-bold";
  let classInput =
    "inline-block rounded w-[auto] p-1 m-1 border-2 border-primary focus:outline-none focus:border-emerald-300";
  //COntext Data\
  const dispatch = useDispatch();

  // Fetcher function

  let [enteredCountry, setEnteredCountry] = useState("");
  let [enteredDate, setEnteredDate] = useState("");
  const updateCountry = (e) => {
    setEnteredCountry(e.target.value);
  };
  const updateDate = (e) => {
    setEnteredDate(e.target.value);
  };

  const formClickHandler = (e) => {
    let selectedReq = e.target.dataset.keyid;
    if (selectedReq === "country") {
      let dataToLoad = {
        apiMode: "country",
        // apiUrl: "https://disease.sh/v3/covid-19/countries",
        apiUrl: `https://restcountries.com/v3.1/name/${enteredCountry}`,
        args: enteredCountry,
      };
      dispatch(updateApiData(dataToLoad));
      return;
    }
    if (selectedReq === "date") {
      let inputDate = new Date(enteredDate);
      console.log(inputDate);
      let dataToLoad = {
        apiMode: "date",
        apiUrl: "https://disease.sh/v3/covid-19/historical/all?lastdays=all",
        args: `${inputDate.getMonth() + 1}/${inputDate.getDate()}/${String(
          inputDate.getFullYear()
        ).slice(2)}`,
      };
      dispatch(updateApiData(dataToLoad));

      return;
    }
    let dataToLoad = {
      apiMode: "dog",
      apiUrl: "https://dog.ceo/api/breeds/image/random",
      args: [Math.random() * 1000],
    };
    dispatch(updateApiData(dataToLoad));
  };
  // const DataHandler = (data, mode) => {
  //   props.onRecieveData(data, mode);
  //   setLoadData(false);
  // };
  return (
    <div>
      <CallApi></CallApi>

      <form className="  m-1 p-1 text-center">
        <Button
          className="m-2 p-2"
          onClick={formClickHandler}
          dataKeyid="world"
        >
          Random Dog picture
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
