import * as d3 from 'd3';

// coordinate Data
const sizeAndCoordinate = [
  {x: 20, y: 40, r: 35, color: 'aquamarine'},
  {x: 140, y: 65, r: 60, color: 'deeppink'},
  {x: 190, y: 140, r: 20, color: 'deepskyblue'},
]

// create svg container inside div
const svgContainer = d3.select('body')
  .append('div')
  .append('svg')
  .attr('width', 200)
  .attr('height', 200)

// use bound data to alterate parameters for new circle inside svg
svgContainer.selectAll('circle')
  .data(sizeAndCoordinate)
  .enter()
  .append('circle')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', d => d.r)
    .style('fill', d => d.color)
