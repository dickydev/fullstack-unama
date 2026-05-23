// OOP -> Object Oriented Programming : Paradigma pemrograman yang berfokus pada Object

// KONSEP DASAR OOP :
// 1. Object & Class
// Object -> adalah kumpulan data (property) dan fungsi (method)
const person = {
  name: "Renday",
  age: 23,
  greet: function () {
    console.log("Hello", this.name);
  },
};

person.greet();

// Class -> Bluprint object
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, ", this.name);
  }
}

const ucup = new Person("Ucup", 23);
ucup.greet();

// 4 Pilar OOP :
/**
 * 1. Encapsulation : Menyembunyikan data agar tidak bisa diakses langsung
 * 2. Inheritance : class bisa mewarisi class lain
 * 3. Polymorphism : Method yang sama, tapi perilaku yang berbeda
 * 4. Abstraction : Menyembunyikan kompleksitas, hanya tampilkan yang penting saja
 */
// 1. Encapsulation
class BankAccount {
  #balance = 0; // Private property

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const renday = new BankAccount();
renday.deposit(10000);
console.log(renday.getBalance());

// 2. Inheritance (Pewarisan)
class Animal {
  speak() {
    console.log("Animal make sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Guk guk guk...");
  }
}
const blacky = new Dog();
blacky.speak();

class Cat extends Animal {
  speak() {
    console.log("Miaw miaw miaw");
  }
}
const orens = new Cat();
orens.speak();

// 3. Polymorphism
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }

  area() {
    return Math.PI * this.r ** 2;
  }
}

const circle1 = new Circle(21);
console.log(circle1.area());

class Square extends Shape {
  constructor(s) {
    super();
    this.s = s;
  }

  area() {
    return this.s ** 2;
  }
}

const square1 = new Square(23);
console.log(square1.area());

// 4. Abstraction
class Car {
  start() {
    this.#engineStart();
    console.log("Car started");
  }

  #engineStart() {
    console.log("Engine Running....");
  }
}

const bmw = new Car();
bmw.start();
