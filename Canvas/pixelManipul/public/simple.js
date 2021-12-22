const img = new Image();
img.src = './small.jpg';
// image size = 5px x 3px (width * height)
// top left = red
// bottom left = blue
// bottom right = yellow
// top right = green
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

img.onload = function() {
  ctx.drawImage(img, 0, 0);
};

// try in the console:

// left top, 5px x 3px
// ctx.getImageData(0,0,5,3).data
// we get an array of 15 * 4 = 60 values
/* [
  // top row (left to right)
  255, 2, 16, 255,    // red
  255, 0, 21, 255,    // red
  255, 0, 24, 255,    // red
  30, 185, 68, 255,   // green
  30, 185, 68, 255,   // green

  // middle row (left to right)
  249, 0, 29, 255,    // red
  255, 1, 25, 255,    // red
  38, 180, 68, 255,   // green
  31, 186, 69, 255,   // green
  31, 186, 69, 255,   // green

  // bottom row (left to right)
  55, 59, 244, 255,   // blue
  49, 58, 247, 255,   // blue
  53, 57, 244, 255,   // blue
  235, 242, 76, 255,  // yellow
  235, 242, 76, 255   // yellow
] */


// ctx.getImageData(0,0,5,3)
// {data: Uint8ClampedArray(60), width: 5, height: 3, colorSpace: 'srgb'}
