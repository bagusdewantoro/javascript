const bagian = document.querySelector('p');

bagian.addEventListener('click', perbarui);

function perbarui() {
  let nama = prompt('Masukkan nama baru');
  bagian.textContent = 'Pemain 1: ' + nama;
}
