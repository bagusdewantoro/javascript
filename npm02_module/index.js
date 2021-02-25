// import modul moment dan modul salam.js
const waktu = require("moment");
const salam = require("./salam");

// menggunakan modul momentjs
console.log(salam.salamPagi());
console.log("Sekarang: " + waktu().format('D MMMM YYYY, h:mm:ss a'));
