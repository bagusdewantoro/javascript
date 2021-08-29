const button1 = document.createElement("button");
button1.textContent = "Get User";
button1.setAttribute("id", "button-1");

const button2 = document.createElement("button");
button2.textContent = "Get User";
button2.setAttribute("id", "button-2");

const head1 = document.createElement("h1");
head1.textContent = "User";

const userDiv = document.createElement("div");
userDiv.setAttribute("id", "user");

const head2 = document.createElement("h1");
head2.textContent = "Users";

const usersDiv = document.createElement("div");
usersDiv.setAttribute("id", "users");

document.body.append(button1, button2, head1, userDiv, head2, usersDiv);

// ============================================

button1.addEventListener('click', loadUser);
function loadUser() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'user.json', true);
  xhr.onload = function() {
    if (this.status === 200) {
      const user = JSON.parse(this.responseText);
      const output =
        `<ul>
          <li>ID: ${user.id}</li>
          <li>Name: ${user.name}</li>
          <li>Emil: ${user.email}</li>
        </ul>`;
      userDiv.innerHTML = output;
    }
  }
  xhr.send();
}

button2.addEventListener('click', loadUsers);
function loadUsers() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'users.json', true);
  xhr.onload = function() {
    if (this.status === 200) {
      let users = JSON.parse(this.responseText);
      let output = '';
      for (let user of users) {
        output +=
        `<ul>
          <li>ID: ${user.id}</li>
          <li>Name: ${user.name}</li>
          <li>Emil: ${user.email}</li>
        </ul>`;
      }
      usersDiv.innerHTML = output;
    }
  }
  xhr.send();
}
