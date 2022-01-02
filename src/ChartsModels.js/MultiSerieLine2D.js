import React, { useState } from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);
const MuliLineSerieLine2D = ({
  id,
  symbol,
  name,
  image,
  total_volume,
  current_price,
  high_24h,
  low_24h,
  market_cap,
  market_cap_change_percentage_24h,
  market_cap_rank,
  price_change_percentage_24h,
}) => {
  const [chartWidth, setChartWidth] = useState("100%");
  console.log(high_24h);
  console.log(image);
  const chartConfigs = {
    type: "msline", // The chart type
    width: `${chartWidth}`,
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: `${symbol.toUpperCase()} / ${name.toUpperCase()}`,
        subCaption: `$${current_price}`,
        xAxisName: "Day",
        theme: "fusion",
      },
      categories: [
        {
          category: [
            {
              label: "Mon",
            },
            {
              label: "Tue",
            },
            {
              label: "Wed",
            },
            {
              vline: "true",
              lineposition: "0",
              color: "#6baa01",
              labelHAlign: "center",
              labelPosition: "0",
              label: "National holiday",
              dashed: "1",
            },
            {
              label: "Thu",
            },
            {
              label: "Fri",
            },
            {
              label: "Sat",
            },
            {
              label: "Sun",
            },
          ],
        },
      ],
      dataset: [
        {
          seriesname: "Bakersfield Central",
          data: [
            {
              value: "1000",
            },
            {
              value: `2000`,
            },
            {
              value: "25507",
            },
            {
              value: "9110",
            },
            {
              value: "15529",
            },
            {
              value: "20803",
            },
            {
              value: "19202",
            },
          ],
        },
        {
          seriesname: "Los Angeles Topanga",
          data: [
            {
              value: "13400",
            },
            {
              value: "12800",
            },
            {
              value: "22800",
            },
            {
              value: "12400",
            },
            {
              value: "15800",
            },
            {
              value: "19800",
            },
            {
              value: "21800",
            },
          ],
        },
      ],
      trendlines: [
        {
          line: [
            {
              startvalue: "17022",
              color: "#6baa01",
              valueOnRight: "1",
              displayvalue: "Average",
            },
          ],
        },
      ],
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default MuliLineSerieLine2D;
