
class Coder{
    //! is a non-null assertion operator
    secondLanguage!:string;
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
    constructor(
        public name:string, 
        public music:string, 
        private age:number, 
        protected language:string = 'TypeScript'
    ){
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
    }

    public getAge(){
        return `Hello, I am ${this.age}`
    }
}

const Nishu = new Coder("Nishu", "Rock", 21);
console.log(Nishu.getAge());

class WebDev extends Coder{
    constructor(
        public computer:string,
        name:string,
        music:string,
        age:number,
    ){
        // super is used to call the constructor of the parent class
        super(name, music, age);
        this.computer = computer;
    }
    public getLanguage(){
        return `I write in ${this.language}`
    }
}

const Azi = new WebDev("Mac", "Azi", "Lofi", 20);
console.log(Azi.getLanguage());

//////////////////////////////////////////////////
// Applying Interfaces to Classes

interface Musician{
    name:string;
    instrument:string;
    play(action: string):string;
}

class Guitarist implements Musician{
    name: string;
    instrument: string;
    constructor(name:string, instrument:string){
        this.name = name;
        this.instrument = instrument;
    }
    play(action: string){
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page= new Guitarist("Jimmy", "Guitar");
console.log(Page.play("Strums"));

class Peeps{
    static count:number = 0;
    //static properties are shared across all instances of a class
    static getCount(){
        return Peeps.count;
    }

    public id:number;
    constructor(public name:string){
        this.name=name;
        this.id=++Peeps.count;
    }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Peeps.count);

console.log(John.id)
console.log(Steve.id)
console.log(Amy.id)

//////////////////////////////

//getters and setters are used to access private properties

class Bands{
    private dataState: string[]
    constructor(){
        this.dataState = [];
    }
    
    //getters are used to access private properties
    public get data(): string[]{
        return this.dataState;
    }

    //setters are used to set private properties
    //setters cannot have a return value
    public set data(value:string[]){
        if(Array.isArray(value) && value.every((el)=> typeof el === "string")){
            this.dataState = value
        } else{
            throw new Error("Invalid data type")
        }
    }
}

const MyBands = new Bands();
MyBands.data = ["The Beatles", "The Rolling Stones"];
console.log(MyBands.data);
MyBands.data=[...MyBands.data, "Led Zeppelin"];
console.log(MyBands.data);