// The main reason to use generics is to enable types (classes, types, or interfaces) to act as parameters. It helps us reuse the same code for different types of input since the type itself is available as a parameter.

// Simple Generic
const echo =<T>(arg: T): T => arg;
// It can be used in utility functions to constrain the types allowed to be passed to a function.

const isObj=<T>(arg:T):boolean=>{
    //Array is also an object
    //null is also an object
    return (typeof arg === 'object' && arg !== null && !Array.isArray(arg))
}

console.log(isObj(true))
console.log(isObj('Nisarg'))
console.log(isObj([1,2,3]))
console.log(isObj({name:'Nisarg'})) //true
console.log(isObj(null))

const isTrue=<T>(arg:T):{arg:T, is:boolean}=>{
    //!! converts any value to boolean
    if(Array.isArray(arg) && !arg.length){
        return {arg, is:false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {arg, is:false}
    }
    return{arg, is:!!arg}
}

console.log(isTrue(false))
console.log(isTrue('Nisarg'))
console.log(isTrue([1,2,3]))
console.log(isTrue(1))
console.log(isTrue({})) 
console.log(isTrue(NaN)) 
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue(''))


///// With an Interface

interface BoolCheck<T>{
    value:T,
    is:boolean,
}

const checkBoolValue=<T>(arg:T):BoolCheck<T>=>{
    if(Array.isArray(arg) && !arg.length){
        return {value:arg, is:false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {value:arg, is:false}
    }
    return{value:arg, is:!!arg}
}

//Another Example to write interface with generics that extends another interface

interface HasID{
    id:number
}

const processUser =<T extends HasID>(user:T):T=>{
    return user
}

console.log(processUser({id:1, name:'Nisarg'}))

// Complex Example

const getUsersProperty = <T extends HasID, K extends keyof T>(users:T[], key:K): T[K][]=>{
    // T is user objects and K is key of user object and we are returning array of values of that key
    return users.map(user=>user[key])
}

const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]

console.log(getUsersProperty(usersArray, "email"))
console.log(getUsersProperty(usersArray, "username"))

// Generic in a Class Example

class StateObject<T>{
    private data:T;

    constructor(value:T){
        this.data = value; 
    }

    get state():T{
        return this.data;
    }

    set state(value:T){
        this.data = value;
    }
}

//Example of inference
// Here when we create an instance of StateObject, the type of the generic is inferred from the type of the value passed to the constructor. So to pass any value we need to define the type will creating an instance of StateObject
const store= new StateObject("Nisarg")
console.log(store.state)
store.state = "Nisarg Thakkar"
console.log(store.state)
//Here it is string so now we can't pass any other type of value
//store.state = 97


// Here we are defining the type of generic while creating an instance of StateObject
const myState=new StateObject<(string| number| boolean)[]>([15])
myState.state=(['Nisarg', 97, true])
console.log(myState.state)

