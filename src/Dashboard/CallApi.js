import React from "react";
import { useQuery } from "react-query";
import queryClient from "..";
const CallApi = (props) => {
  console.log(props.changeData);
  let apiMode = props.changeData.apiMode,
    apiUrl = props.changeData.apiUrl,
    apiArgs = props.changeData.args;

  console.log(apiMode);
  console.log(apiUrl);
  console.log(apiArgs);
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
    sendData = sendData.filter((el) => el.country === apiArgs)[0];
  }
  if (apiMode === "date") {
    console.log(apiArgs);
    // console.log(
    //   [sendData].map((el) => {
    //     return [el].filter((el2) => el2.apiArgs);
    //   })
    // );
  }
  console.log(sendData);
  props.onDataRecieve(sendData);
  return <></>;
};
export default CallApi;
