const button = document.createElement("button");
// To add text contents, there are three ways
// better use 1 & 2 below. The innerHTML can understand HTML element inside the string
button.append(document.createTextNode("Get Text File"));
// button.textContent = "Get Text File"
// button.innerHTML = "Get Text File;

button.setAttribute("id", "button-1")
document.body.appendChild(button);

// Create event listener
button.addEventListener('click', loadText);

function loadText() {
  // Create XHR Object
  const xhr = new XMLHttpRequest();
  // OPEN - type, url/file, async
  xhr.open('GET', 'sample.txt', true);
  console.log(`READYSTATE: ${xhr.readyState}`);

  xhr.onload = function() {
    console.log(`READYSTATE: ${xhr.readyState}`);
    if (this.status === 200) {
      console.log(this.responseText);
    }
  }

  xhr.onerror = function() {
    console.log('Request Error.....')
  }

  // Send request
  xhr.send();
}
