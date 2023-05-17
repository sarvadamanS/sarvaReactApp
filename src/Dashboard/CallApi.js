import React from "react";
import { useQuery } from "react-query";
import queryClient from "..";
const CallApi = (props) => {
  console.log(props.changeData);
  let apiMode = props.changeData.apiMode,
    apiUrl = props.changeData.apiUrl,
    apiArgs = props.changeData.args;

  // console.log(apiMode);
  // console.log(apiUrl);
  // console.log(apiArgs);
  const getFacts = async () => {
    const res = await fetch(apiUrl);
    console.log(res);
    return res.json();
  };

  // Using the hook
  const { data, error, isLoading } = useQuery(
    props.changeData.apiMode,
    getFacts
  );
  // Error and Loading states
  if (error) return <p>Error</p>;
  if (isLoading) return <p>is Loading</p>;
  // Show the response if everything is fine
  // if (apiMode === "country") {
  //   data.filter((el) => el.country === "Algeria");
  // }
  let sendData = queryClient.getQueryData(props.changeData.apiMode);
  if (apiMode === "country") {
    sendData = sendData.filter(
      (el) => el.country.toUpperCase() === apiArgs.toUpperCase()
    )[0];
  }
  if (apiMode === "date") {
    console.log(apiArgs);
    console.log(sendData);
    let dateKeys = Object.keys(sendData);
    // console.log(dateKeys);
    let dateData = { cases: "", deaths: "", recovered: "" };
    [sendData].forEach((el) => {
      let curVal = el[dateKeys[0]];
      dateData.cases = curVal[String(apiArgs)];
      if (!curVal[String(apiArgs)]) return <>Error</>;
      curVal = el[dateKeys[1]];
      dateData.deaths = curVal[String(apiArgs)];
      curVal = el[dateKeys[2]];
      dateData.recovered = curVal[String(apiArgs)];
    });
    // console.log(dateData);
    sendData = dateData;
  }
  // console.log(sendData);
  props.onDataRecieve(sendData, apiMode);
  return <></>;
};
export default CallApi;
