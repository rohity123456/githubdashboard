import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column3d from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Column3d, FusionTheme);
const chartConfigs = {
  type: "column3d", // The chart type
  width: "100%", // Width of the chart
  height: "100%", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Most Forked Repository", //Set the chart caption
      xAxisName: "Repository",
      yAxisName: "Stars",
    },
    // Chart Data - from step 2
  },
};
const Column3D = ({ data }) => {
  chartConfigs.dataSource.data = data;
  return <ReactFC {...chartConfigs} />;
};

export default Column3D;
