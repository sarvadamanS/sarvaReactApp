import React from "react";
import { useQuery } from "react-query";
const CallApi = (props) => {
  let apiMode = props.changeData,
    apiUrl = "https://disease.sh/v3/covid-19/all";
  if (apiMode === "country") {
    apiUrl = "https://disease.sh/v3/covid-19/countries";
  }
  if (apiMode === "date") {
    apiUrl = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";
  }
  console.log(apiMode);
  console.log(apiUrl);
  const getFacts = async () => {
    const res = await fetch(apiUrl);
    console.log(res);
    return res.json();
  };

  // Using the hook
  const { data, error, isLoading } = useQuery("randomFacts", getFacts);
  // Error and Loading states
  if (error) return <p>Error</p>;
  if (isLoading) return <p>is Loading</p>;
  // Show the response if everything is fine
  props.onDataRecieve(data, apiMode);
  return <></>;
};
export default CallApi;
