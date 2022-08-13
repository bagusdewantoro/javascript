import * as d3 from 'd3';

// example creating svg circle element
d3.select('body')
  .append('svg')
  .attr('width', 50)
  .attr('height', 50)
    .append('circle')
    .attr("cx", 25)
    .attr("cy", 25)
    .attr("r", 25)
    .style("fill", "purple");

// ===================================================================== //
// Use Bound Data to alter the parameters used in building the SVG Circle!
// Circle parameter data
const circleRadii = [40, 20, 10];

// Create svg container inside new <div>
const svgContainer = d3.select("body")
  .append("div")
  .append("svg")
  .attr("width", 200)
  .attr("height", 200)

// Apply the data to the new circle inside svg container
svgContainer.selectAll("circle") // select all circle inside svg (currently, there is no circle yet)
  .data(circleRadii)
  .enter()
  .append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", d => d)
    .style("fill", "green"); // now we have 3 new circles, but with same colors (green)

// Apply the data to the new circle inside svg container
// if we select 'circle', we already have 3 circles, so our data will not be used
// instead, we will use not existed elements, for example: "p"
svgContainer.selectAll("p")
  .data(circleRadii)
  .enter()
  .append("circle")
    .attr("cx", 50)
    .attr("cy", 150)
    .attr("r", d => d)
    .style("fill", d => {
      switch (d) {
        case 40:
          return 'red'
          break;
        case 20:
          return 'green'
          break;
        case 10:
          return 'blue'
          break;
        default:
          return 'teal'
      }
    });
