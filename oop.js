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

const dog = new Animal("dog", 12, "Woof!")
const cat = new Animal("cat", 12, "Meow!")
console.log(`i have a ${dog.name} his age is ${dog.age}, dog say ${dog.makeSound()}`);
console.log(`i have a ${cat.name} his age is ${cat.age}, cat say ${cat.makeSound()}`);