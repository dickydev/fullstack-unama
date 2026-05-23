// 1. OPERATOR ARITMATIKA : +, -, *, /, **, %
console.log("---------OPERATOR ARITMATIKA---------");
let a = 10;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b);

// 2. OPERATOR PENUGASAN (ASSIGNMENT) : =, +=, -=, *=, /=, **=, %=
console.log("---------OPERATOR PENUGASAN---------");
let nilai = 70;
console.log(nilai);
nilai += 10;
console.log(nilai);
nilai -= 5;
console.log(nilai);
nilai *= 2;
console.log(nilai);
nilai /= 4;
console.log(nilai);
nilai **= 2;
console.log(nilai);
nilai %= 5;
console.log(nilai);

// 3. OPERATOR LOGIKA : && (DAN), || (ATAU), ! (NEGASI)
console.log("---------OPERATOR LOGIKA---------");
let sudahMakan = true;
let cuciPiring = false;

console.log(sudahMakan && cuciPiring);
console.log(sudahMakan || cuciPiring);
console.log(!sudahMakan);

// 4. OPERATOR PERBANDINGAN (COMPARISON) : ===, !==, >, <, >=, <=
console.log("---------OPERATOR COMPARISON---------");
let umurBudi = 20;
let umurUcup = 19;

console.log(umurBudi === umurUcup);
console.log(umurBudi !== umurUcup);
console.log(umurBudi > umurUcup);
console.log(umurBudi < umurUcup);
console.log(umurBudi >= umurUcup);
console.log(umurBudi <= umurUcup);

// 5. OPERATOR TERNARY : Shortcut if/else(<condition> ? "ekspresi benar" : "ekspresi salah")
console.log("---------OPERATOR TERNARY---------");
const score = 80;

score >= 90 ? console.log("Predikat A") : console.log("Tidak Dapat Predikat");
