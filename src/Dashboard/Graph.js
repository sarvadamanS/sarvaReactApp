// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
class Graph extends React.Component {
  render() {
    // STEP 2 - Chart Data
    let givenData = this.props.inputData;
    if (!givenData) return;
    let arg1 = Object.keys(givenData);
    let agr2 = Object.values(givenData);
    let createObj = [];
    // console.log(Object.values(givenData));
    arg1.forEach((el, i) => {
      if (el === "updated") return;
      return createObj.push({ label: el, value: agr2[i] });
    });
    console.log(createObj);
    // const chartData = [
    //   {
    //     label: "Venezuela",
    //     value: "290",
    //   },
    //   {
    //     label: "Saudi",
    //     value: "260",
    //   },
    //   {
    //     label: "Canada",
    //     value: "180",
    //   },
    //   {
    //     label: "Iran",
    //     value: "140",
    //   },
    // ];

    // STEP 3 - Creating the JSON object to store the chart configurations
    const chartConfigs = {
      type: "column2d", // The chart type
      width: window.matchMedia("(max-width: 700px)").matches
        ? window.innerWidth / 1
        : window.innerWidth / 2.5, // Width of the chart
      height: window.innerHeight / 2, // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        // Chart Configuration
        chart: {
          //Set the chart caption
          caption: "Data of Covid cases",
          //Set the chart subcaption
          //   subCaption: "In MMbbl = One Million barrels",
          //   //Set the x-axis name
          //   xAxisName: "Country",
          //   //Set the y-axis name
          //   yAxisName: "Reserves (MMbbl)",
          //   numberSuffix: "K",
          //Set the theme for your chart
          theme: "fusion",
        },
        // Chart Data
        data: createObj,
      },
    };
    return <ReactFC {...chartConfigs} />;
  }
}

export default Graph;
