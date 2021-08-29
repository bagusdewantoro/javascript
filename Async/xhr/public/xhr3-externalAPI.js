const button1 = document.createElement("button");
button1.textContent = "Get User";
button1.setAttribute("id", "button-1");

const head1 = document.createElement("h1");
head1.textContent = "Github User";

const userDiv = document.createElement("div");
userDiv.setAttribute("id", "user");

document.body.append(button1, head1, userDiv);

// ============================================

button1.addEventListener('click', loadUsers);
function loadUsers() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users', true);
  xhr.onload = function() {
    if (this.status === 200) {
      let users = JSON.parse(this.responseText);
      console.log(users);

      let output = '';
      for (let user of users) {
        output +=
        `<div class="user">
          <img src="${user.avatar_url}" width="70" height="70">
          <ul>
            <li>ID: ${user.id}</li>
            <li>ID: ${user.login}</li>
          </ul>
        </div>`;
      }

      userDiv.innerHTML = output;
    }
  }
  xhr.send();
}
