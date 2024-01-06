"use strict";
class Coder {
    //Properties are methods are called members inside a class
    // name:string;
    // music:string;
    // age:number;
    // language:string;
    //Constructor is a special method that is called when an object is instantiated
    // constructor(
    //     name:string, 
    //     music:string, 
    //     age:number, 
    //     language:string
    //     ){
    //     this.name = name;
    //     this.music = music;
    //     this.age = age;
    //     this.language = language;
    // }
    //This is too redundant
    //Other way is Visibilty Modifiers or Access Modifiers
    constructor(name, music, age, language = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
    }
    getAge() {
        return `Hello, I am ${this.age}`;
    }
}
const Nishu = new Coder("Nishu", "Rock", 21);
console.log(Nishu.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        // super is used to call the constructor of the parent class
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLanguage() {
        return `I write in ${this.language}`;
    }
}
const Azi = new WebDev("Mac", "Azi", "Lofi", 20);
console.log(Azi.getLanguage());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "Guitar");
console.log(Page.play("Strums"));
class Peeps {
    //static properties are shared across all instances of a class
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count);
console.log(John.id);
console.log(Steve.id);
console.log(Amy.id);
//////////////////////////////
//getters and setters are used to access private properties
class Bands {
    constructor() {
        this.dataState = [];
    }
    //getters are used to access private properties
    get data() {
        return this.dataState;
    }
    //setters are used to set private properties
    //setters cannot have a return value
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
        }
        else {
            throw new Error("Invalid data type");
        }
    }
}
const MyBands = new Bands();
MyBands.data = ["The Beatles", "The Rolling Stones"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Led Zeppelin"];
console.log(MyBands.data);
