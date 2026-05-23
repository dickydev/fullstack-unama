// Array -> The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
// Indexing -> cara memposisikan item array yang dimulai dari 0

let listMahaSiswa = ["Tia", "Aisyah", "Abid", "Safa", "Viki", "Hafiz", "Dicky"];

console.log(listMahaSiswa);

// 1. Mengakses Item Array
console.log(listMahaSiswa[1]);

// 2. Mengubah Item Array
listMahaSiswa[2] = "Ucup";
console.log(listMahaSiswa);

// 3. Menambahkan dan Menghapus -> Method Array
// -. Menambahkan Item Array : push(), unshift()
listMahaSiswa.push("July"); // Menambahkan item array dari paling belakang
console.log(listMahaSiswa);

listMahaSiswa.unshift("Rifqi"); // Menambahkan item array dari paling depan
console.log(listMahaSiswa);

// -. Menghapus Item Array : pop(), shift()
listMahaSiswa.pop(); // Menghapus item array dari paling belakang
console.log(listMahaSiswa);

listMahaSiswa.shift(); // Menghapus item array dari paling depan
console.log(listMahaSiswa);

// 4. splice() Method Array -> The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
listMahaSiswa.splice(3, 1);
console.log(listMahaSiswa);

const listBarang = ["Komputer", "Mouse", "Layar"];

const listNama = ["Tia", "Tia", "Tia", "Tia", "Tia"];
listNama[3] = "Ucup";
console.log(listNama);
