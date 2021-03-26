const list = ['A','B','C','D'];
console.log(list);

const acak = function(daftar) {
  let indexNow = daftar.length;
  let nilaiSementara;
  let indexAcak;
  console.log(`indexNow = daftar.length = ${indexNow}`);
  console.log('');

  // ketika masih ada elemen untuk diacak:
  while (0 !== indexNow) {


    // pilih elemen yang masih ada
    indexAcak = Math.floor(Math.random() * indexNow);
    console.log(`indexAcak = ${indexAcak}`);
    indexNow -= 1;
    console.log(`indexNow = indexNow - 1 = ${indexNow}`);

    // lalu tukar dengan elemen sekarang
    nilaiSementara = daftar[indexNow];
    console.log(`nilaiSementara = daftar[indexNow] = ${nilaiSementara}`);
    daftar[indexNow] = daftar[indexAcak];
    console.log(`daftar[indexNow] = daftar[indexAcak] = ${daftar[indexAcak]}`);
    console.log(daftar);
    daftar[indexAcak] = nilaiSementara;
    console.log(`daftar[indexAcak] = nilaiSementara = ${daftar[indexAcak]}`);
    console.log(daftar);
    console.log('');
  }

  return daftar;
  console.log(daftar);
}

acak(list);
