const button = document.createElement("button");
// To add text contents, there are three ways
// better use 1 & 2 below. The innerHTML can understand HTML element inside the string
button.append(document.createTextNode("Get Text File"));
// button.textContent = "Get Text File"
// button.innerHTML = "Get Text File;
button.setAttribute("id", "button-1")

const text = document.createElement("div");
text.setAttribute("id", "text");
document.body.append(button, text);


// Create event listener
button.addEventListener('click', loadText);

function loadText() {
  // Create XHR Object
  const xhr = new XMLHttpRequest();
  // OPEN - type, url/file, async
  xhr.open('GET', 'sample.txt', true);
  console.log(`READYSTATE: ${xhr.readyState}`);

  // OPTIONAL - used for loaders
  xhr.onprogress = function() {
    console.log(`READYSTATE: ${xhr.readyState}`);
  }

  xhr.onreadystatechange = function() {
    //console.log(`READYSTATE: ${xhr.readyState}`);
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
      text.innerHTML = this.responseText;
    } else if (this.status === 404) {
      text.innerHTML = 'Sorry my friend, not found';
    }
  }

  // Send request
  xhr.send();
}
