import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Bar3d from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Bar3d, FusionTheme);
const chartConfigs = {
  type: "bar3d", // The chart type
  width: "100%", // Width of the chart
  height: "100%", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Most Popular Languages", //Set the chart caption
      xAxisName: "Language",
      yAxisName: "Stars",
    },
    // Chart Data - from step 2
  },
};
const Bar3D = ({ data }) => {
  chartConfigs.dataSource.data = data;
  return <ReactFC {...chartConfigs} />;
};

export default Bar3D;
