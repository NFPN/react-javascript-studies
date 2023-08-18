import react, { useState } from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dp) => dp.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={totalMax}
          label={data.label}
        />
      ))}
    </div>
  );
}

export default Chart;
