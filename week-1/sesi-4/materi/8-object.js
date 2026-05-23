// Object -> The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

let mahasiswa = {
  nama: "Safa",
  NIM: "200345123",
  kelas: "Fullstack Developer",
};

console.log(mahasiswa);
console.log(mahasiswa.nama);
console.log(mahasiswa.NIM);
console.log(mahasiswa.kelas);

// Mengubah Object
mahasiswa.nama = "Safa Ruddin";
console.log(mahasiswa);

// Menghapus Object
delete mahasiswa.NIM;
console.log(mahasiswa);

// Menambahkan Object
mahasiswa.alamat = "Jl Untung Jawa";
console.log(mahasiswa);
