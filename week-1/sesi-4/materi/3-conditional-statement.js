// IF/ELSE STATEMENT : The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

/**
 * Notes :
 * 1. Truthy : true, 1, "teks", Semua angka selain nol (termasuk angka negatif), String (teks) yang berisi karakter, termasuk string "0" atau "false", Objek ({}) atau Array ([]) kosong maupun yang ada isinya dan Tanggal (new Date())
 *
 * 2. Falsy : false, 0 (angka nol), -0 (nol negatif), 0n (BigInt untuk nol), "" (string kosong), null, undefined, NaN (Not a Number)
 */

const nilai = -1000;
let predikat = "";

if (nilai >= 90) {
  if (nilai > 100) {
    console.log("Nilai melebihi 100");
  } else {
    predikat = "A";
    console.log(`Nilai: ${nilai} mendapatkan Predikat ${predikat}`);
  }
} else if (nilai >= 80) {
  predikat = "B";
  console.log(`Nilai: ${nilai} mendapatkan Predikat ${predikat}`);
} else if (nilai >= 70) {
  predikat = "C";
  console.log(`Nilai: ${nilai} mendapatkan Predikat ${predikat}`);
} else if (nilai < 70) {
  if (nilai < 0) {
    console.log("Nilai kurang dari 0");
  } else {
    predikat = "D";
    console.log(`Nilai: ${nilai} mendapatkan Predikat ${predikat}`);
  }
} else {
  console.log("Nilai yang dimasukkan bukan number");
}
