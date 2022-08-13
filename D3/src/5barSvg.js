import * as d3 from 'd3';
import './style.css';

const [svgWidth, svgHeight, barPadding] = [500, 100, 1]
const dataset = [
  5, 10, 13, 19, 21, 25,
  22, 18, 15, 13, 11, 12,
  15, 20, 18, 17, 16, 18
];

// create svg container
const svg = d3.select('body')
  .append('svg')
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// create bars:
svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
    // x position for each rect translates each index
    .attr("x", (d, index) => index * (svgWidth / dataset.length))
    // y position so bars will be perceived as "from down to top"
    .attr("y", d => svgHeight - (d * 4))
    .attr("width", (svgWidth / dataset.length) - 2)
    .attr("height", d => d * 4)
    // color to be gradation 'blueish'
    .attr("fill", d => `rgb(0, 0, ${d * 10}`)

// create labels:
svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
    .text(d => d)
    // x position similar code with rect (but add 5px)
    .attr("x", (d, index) => index * (svgWidth / dataset.length) + (svgWidth / dataset.length - barPadding) / 2)
    // y position similar with rect (but add 15px)
    .attr("y", d => svgHeight - (d * 4) + 15)
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white")
    .attr("text-anchor", "middle")
