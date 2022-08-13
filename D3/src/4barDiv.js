import * as d3 from 'd3';
import './style.css';


// create bars
// the data for each bar's height:
const dataset = [ 18, 7, 5, 26, 11, 8, 21];
// create bar with same height:
d3.select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
    .attr("class", "bar1")
    // make different height based on the dataset:
    .style("height", d => `${d * 5}px`)
    // add space for each bar
    .style("margin-right", "2px")


// create random bars each time we reload the page
const randomData = (length, max) => (
  [...new Array(length)].map(() => Math.round(Math.random() * max))
)
// console.log(randomData(15, 150))
d3.select("body")
  .append("div")
  .data(randomData(15, 150))
  .enter()
  .append("div")
    .attr("class", "bar1")
    .style("height", d => `${d}px`)
    .style("margin-right", "2px")
