'use strict';
const Queue = require('./Queue').Queue;

class Animal {
  constructor(name) {
    this.name = name;
    this.arrivalDate = null;
  }
  setArrivalDate() {
    this.arrivalDate = Date.now();
  }
  isOlderThan(animal) {
    return this.arrivalDate < animal.arrivalDate;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
  }
  enqueue(animal) {
    animal.setArrivalDate();
    if (animal instanceof Dog) {
      this.dogs.add(animal);
    }
    else if (animal instanceof Cat) {
      this.cats.add(animal);
    }
  }
  dequeueAny() {
    if (this.dogs.isEmpty()) {
      return this.dequeueCat();
    }
    else if (this.cats.isEmpty()) {
      return this.dequeueDog();
    }

    const dog = this.dogs.peek();
    const cat = this.cats.peek();
    if (dog.isOlderThan(cat)) {
      return this.dequeueDog();
    }
    else {
      return this.dequeueCat();
    }
  }
  dequeueDog() {
    return this.dogs.remove().data;
  }
  dequeueCat() {
    return this.cats.remove().data;
  }
}

// TESTS
const shelter = new AnimalShelter();
const testDog = new Dog("Rover");
const testCat = new Cat("Mittens");
console.log(shelter);

shelter.enqueue(testDog);
shelter.enqueue(testCat);
console.log(shelter);

console.log(shelter.dequeueAny());
console.log(shelter);
