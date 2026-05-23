// FUNCTION -> Kumpulan blok code yang bisa dipanggil ulang berdasarkan nama fungsi nya

// 1. Basic Function
// -. Make Function
function sapa() {
  console.log("Hello dunia...");
  return;
}
// -. Calling Function (Invoke)
sapa();
sapa();
sapa();

// 2. Funtion dengan Parameter dan Arguments
function tambah(a, b) {
  console.log(a + b);
  return;
}

tambah(1, 2);
tambah(1230, 473);

// 3. Function dengan Return nilai Explicit
/**
 * NOTES :
 * -. implicit : secara tidak langsung
 * -. explicit : secara langsung
 */

function kali(a, b) {
  return a * b;
}

console.log(kali(2, 4));
// console.log(kali(10, 4));

// CATATAN : SEMUA FUNCTION MEMILIKI RETURN
