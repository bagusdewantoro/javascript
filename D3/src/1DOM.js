import * as d3 from 'd3';

// append div with text
d3.select('body').append('div').text('Append div tag with text');

// append svg inside our new div
d3.select('body')
  .select('div')
    .append('svg')
    .attr('width', 50)
      .append('circle')
      .attr("cx", 25)
      .attr("cy", 25)
      .attr("r", 25)
      .style("fill", "purple");


// d3.selection.enter() method
// It is used to create the missing elements and return the enter selection.
// It represents the elements that need to be created.
// It must append an element to each element of the enter selection.
// It consists of ‘placeholder’ elements that represent the elements that need to be added.

// bind data to DOM element
const theData = [ 1, 2, 3, 4 ];
d3.select("body")
  .selectAll("p") // there is one existing <p>, so the data will be reduced by 1
  .data(theData)
  .enter()
  .append("p")
  .text('bind data')


// use data bound to DOM elements part I
d3.select("body")
  .selectAll("span") // there is no existing <span>, so all data will be used
  .data(theData)
  .enter()
  .append("p")
  .text(d => d);

// use data bound to DOM elements part II
d3.select("body")
  .selectAll("h1") // there is no existing <h1>, so all data will be used
  .data(theData)
  .enter()
  .append("p")
  .text(d => d * 10);
