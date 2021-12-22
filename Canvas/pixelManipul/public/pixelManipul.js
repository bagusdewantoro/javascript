const img = new Image();
img.src = './sample.jpg';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

img.onload = function() {
  ctx.drawImage(img, 0, 0);
};
const hoveredColor = document.getElementById('hovered-color');
const selectedColor = document.getElementById('selected-color');

// test in the console:

// left top, 1px x 1px
// ctx.getImageData(0,0,1,1).data  // [254, 254, 254, 255] // white

// left bottom, 1px x 1px
// ctx.getImageData(0,199,1,1).data  // [254, 0, 2, 255] // red

// right bottom, 1px x 1px
// ctx.getImageData(249,199,1,1).data  // [249, 251, 4, 255] // yellow

// right top, 1px x 1px
// ctx.getImageData(249,0,1,1).data  // [1, 1, 255, 255] // blue yellow

// left bottom, 3px x -4px
// ctx.getImageData(0,199,3,-4).data
/* [
  254, 0, 2, 255,
  254, 0, 2, 255,
  254, 0, 2, 255,
  254, 0, 2, 255,
  254, 0, 2, 255,
  254, 0, 2, 255,
  254, 0, 2, 255,
  254, 0, 2, 255,
  254, 0, 2, 255,
  254, 0, 2, 255,
  254, 0, 2, 255,
  254, 0, 2, 255
] */

function pick(event, destination) {
  const x = event.layerX;
  const y = event.layerY;
  const pixel = ctx.getImageData(x, y, 1, 1);
  const data = pixel.data;

	const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
	destination.style.background = rgba;
	destination.textContent = rgba;

	return rgba;
}


// test in the console:

// const data = ctx.getImageData(0,199,1,1).data;   // [254, 0, 2, 255];
// const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;   // 'rgba(254, 0, 2, 1)'
// hoveredColor.style.background = rgba;   // hovered color color changed


canvas.addEventListener('mousemove', function(event) {
	pick(event, hoveredColor);
});
canvas.addEventListener('click', function(event) {
	pick(event, selectedColor);
});
