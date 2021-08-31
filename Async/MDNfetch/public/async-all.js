console.log ('Console - 1');
let image;

fetch('coffee.jpg')
.then((response) => {
  console.log('Console - 2 - fetch');
  return response.blob();
})
.then((myBlob) => {
  let objectURL = URL.createObjectURL(myBlob);
  image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.then(() => {
  console.log('Console - 3' + image.src);
})
.catch((error) => {
  console.log('There has been a problem with your fetch operation: ' + error.message);
});
