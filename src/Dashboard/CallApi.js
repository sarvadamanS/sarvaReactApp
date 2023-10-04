import React from "react";
import { useQuery } from "react-query";
import queryClient from "..";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateRecievedData } from "../slices/recievedDataSlice";
import { updateDogData } from "../slices/dogDataSlice";
const CallApi = () => {
  const curApiData = useSelector((state) => state.apiData.value);
  const dispatch = useDispatch();
  console.log(curApiData);
  let apiMode, apiUrl, apiArgs;
  let [apiPayload, setApiPayload] = useState("");
  useEffect(() => {
    setApiPayload(curApiData);
  }, [curApiData]);
  apiMode = apiPayload.apiMode;
  apiUrl = apiPayload.apiUrl;
  apiArgs = apiPayload.args;

  // console.log(apiMode);
  // console.log(apiUrl);
  // console.log(apiArgs);
  const getFacts = async () => {
    const res = await fetch(apiUrl);
    return res.json();
  };

  // Using the hook
  const { data, error, isLoading } = useQuery(`${apiMode}${apiArgs}`, getFacts);
  // Error and Loading states
  if (error) return <p>Error</p>;
  if (isLoading) return <p>is Loading</p>;

  // console.log(data);
  let sendData = queryClient.getQueryData(apiMode);
  console.log(data);
  if (apiMode === "date") {
    let dateKeys = Object.keys(sendData);
    // console.log(dateKeys);
    let dateData = { cases: "", deaths: "", recovered: "" };
    [sendData].forEach((el) => {
      let curVal = el[dateKeys[0]];
      dateData.cases = curVal[String(apiArgs)];
      curVal = el[dateKeys[1]];
      dateData.deaths = curVal[String(apiArgs)];
      curVal = el[dateKeys[2]];
      dateData.recovered = curVal[String(apiArgs)];
    });
    // console.log(dateData);
    sendData = dateData;
    if (dateData.cases === undefined) sendData = null;
  }
  // console.log(sendData);
  if (apiMode === "country") {
    let saveApiData = [data[0], apiMode];
    dispatch(updateRecievedData(saveApiData));
  }
  if (apiMode === "dog") {
    console.log(data);
    let saveApiData = [data, apiMode];
    dispatch(updateDogData(saveApiData));
  }
  return <></>;
};
export default CallApi;
