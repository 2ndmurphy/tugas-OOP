class Animal {
    constructor(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }

    makeSound() {
        return this.sound
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age, "Woof!")
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name, age, "Meow!")
    }
}

const dog = new Dog("dog", 12)
const cat = new Cat("cat", 12)
console.log(`i have a ${dog.name} his age is ${dog.age}, dog say ${dog.makeSound()}`);
console.log(`i have a ${cat.name} his age is ${cat.age}, cat say ${cat.makeSound()}`);