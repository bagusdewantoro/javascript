function buatParagraf() {
  let bagian = document.createElement('p');
  bagian.textContent = 'Kamu sudah klik tombolnya!';
  document.body.appendChild(bagian);
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', buatParagraf);
}
