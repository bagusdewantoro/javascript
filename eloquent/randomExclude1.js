const prompt = require('prompt-sync')();

const daftar1 = [11,12,13,14,15];

const ubahDaftar = function(daftarnya) {
  // ubah array
  const angka = Math.floor(Math.random() * daftarnya.length);
  console.log('angka = ', angka);
  let hapus = daftarnya.splice(angka, 1);
  console.log('hapus = ', hapus);
  let baru = hapus[0];
  console.log('baru = ', baru);
  console.log(daftarnya);

  // pilih lanjut atau tidak?
  let pilih = prompt('Lanjutkan? (y/n) > ');
  while (daftar1.length > 1) {   //selama jumlah array lebih dari 1
    if (pilih !== 'y') {
      // terminate node
      process.exit();
    } else {
      ubahDaftar(daftar1);
    }
  }
}

// jalankan fungsinya
ubahDaftar(daftar1);
