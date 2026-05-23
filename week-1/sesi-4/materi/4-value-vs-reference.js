// 1. VALUE (PRIMITIVE) -> Nilainya disalin
let a = 10;
let b = 10;
console.log(a === b);

let nama = "ucup";
let gelar = "ucup";
console.log(nama === gelar);

let umur = 20;
let age = 20;
console.log(umur === age);

// 2. REFERENCE (OBJECT / ARRAY) -> Nilainya tidak disalin → tapi mendapatkan referensi
let obj1 = {
  nama: "Ucup",
};

let obj2 = obj1;
console.log(obj1 === obj2);
