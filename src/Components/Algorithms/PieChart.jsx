import React from "react";
import Chart from "react-google-charts";

const PieChart = (props) => {
  const pieData = [
    ["Page Sequence", "Hit/Fault"],
    ["Hit", props.hit],
    ["Fault", props.fault],
  ];

  const pieOptions = {
    title: "Hit Vs Fault Comparison",
    is3D: true,
    backgroundColor: "#1a202c",
    titleTextStyle: {
      color: "#fff",
      fontSize: 24,
    },
    pieSliceTextStyle: {
      color: "black",
      fontSize: 24,
    },
    slices: { 0: { color: "#7C99AC" }, 1: { color: "#FFCDDD" } },
  };

  return (
    <div className="w-full mt-8 mb-5 flex flex-col items-center justify-center px-4">
      <h2 className="mb-4 text-4xl text-white text-center">Pie Chart</h2>
      <Chart
        width={"900px"}
        height={"500px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={pieData}
        options={pieOptions}
        backgroundColor={"#1a202c"}
        rootProps={{ "data-testid": "3" }}
      />
    </div>
  );
};

export default PieChart;
