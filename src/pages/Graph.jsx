import React, { useEffect, useState, useReducer } from "react";
import { Chart } from "react-google-charts";

require("dotenv").config();

export default function Graph(props) {
  const options = {
    title: "Age vs. Weight comparison",
    hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
    vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
    legend: "none",
  };
  const data = [
    ["Age", "Weight"],
    [8, 12],
    [4, 5.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7],
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Chart
            chartType="ScatterChart"
            data={data}
            options={options}
            width="80%"
            height="400px"
            legendToggle
          />
        </div>
        <div className="col-md-6">
          <Chart
            width={"500px"}
            height={"300px"}
            chartType="GeoChart"
            data={[
              ["Country", "Popularity"],
              ["Germany", 200],
              ["United States", 300],
              ["Brazil", 400],
              ["Canada", 500],
              ["France", 600],
              ["RU", 700],
            ]}
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            mapsApiKey="AIzaSyA-Qq-U1dbDDfjNqqqjWEoE8bSsQKhV368"
            rootProps={{ "data-testid": "1" }}
          />
        </div>
      </div>

      {/* <Graph
        width={"500px"}
        height={"300px"}
        chartType="GeoChart"
        data={[
          ["Country", "Popularity"],
          ["Germany", 200],
          ["United States", 300],
          ["Brazil", 400],
          ["Canada", 500],
          ["France", 600],
          ["RU", 700],
        ]}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="YOUR_KEY_HERE"
        rootProps={{ "data-testid": "1" }}
      /> */}
    </div>
  );
}
