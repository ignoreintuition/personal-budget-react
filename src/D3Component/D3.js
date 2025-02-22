import * as d3 from "d3";
import React from "react";
import axios from "axios";

function D3Component() {
  const ref = React.useRef();

  React.useEffect(() => {
    axios.get("http://localhost:3001/budget").then((res) => {
      console.log(res);
      const data = res?.data.myBudget.map((d) => ({
        budget: d.budget,
        title: d.title,
      }));
      const width = 300,
        height = 450,
        margin = 40;

      const radius = Math.min(width, height) / 2 - margin;
      const svg = d3
        .select(ref.current)
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

      const colors = [
        "#ea5545",
        "#f46a9b",
        "#ef9b20",
        "#edbf33",
        "#ede15b",
        "#bdcf32",
        "#87bc45",
        "#27aeef",
        "#b33dc6",
      ];
      const pie = d3.pie().value((d) => Number(d.budget));
      const data_ready = pie(data);
      svg
        .selectAll("pieces")
        .data(data_ready)
        .enter()
        .append("path")
        .attr("d", (d) =>
          d3.arc()({
            innerRadius: 0,
            outerRadius: radius,
            startAngle: d.startAngle,
            endAngle: d.endAngle,
          }),
        )
        .attr("fill", (d, i) => colors[i])
        .attr("stroke", "#121926")
        .style("stroke-width", "1px");

      const labelLocation = d3.arc().innerRadius(100).outerRadius(radius);

      svg
        .selectAll("pieces")
        .data(data_ready)
        .enter()
        .append("text")
        .text((d) => d.data.title)
        .attr(
          "transform",
          (d) => "translate(" + labelLocation.centroid(d) + ")",
        )
        .style("text-anchor", "middle")
        .style("font-size", 15);
    });
  }, []);
  return <svg id="myD3Chart" ref={ref}></svg>;
}

export default D3Component;
