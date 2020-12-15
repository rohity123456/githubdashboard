import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Create a JSON object to store the chart configurations
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
const chartConfigs = {
  type: "doughnut2d", // The chart type
  minheight: "400",
  width: "100%", // Width of the chart
  height: "100%", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Most Used Languages", //Set the chart caption
      decimals: 0,
      animateClockwise: "1",
      theme: "candy", //Set the theme for your chart
    },
    // Chart Data - from step 2
  },
};
const Doughnut2d = ({ data }) => {
  chartConfigs.dataSource.data = data;
  return <ReactFC {...chartConfigs} />;
};
export default Doughnut2d;
