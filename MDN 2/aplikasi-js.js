function buatParagraf() {
  let bagian = document.createElement('p');
  bagian.textContent = 'Kamu sudah klik tombolnya!';
  document.body.appendChild(bagian);
}

const tombol = document.querySelectorAll('button');

for(let i = 0; i < tombol.length ; i++) {
  tombol[i].addEventListener('click', buatParagraf);
}
