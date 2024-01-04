type One=string
type Two=string | number
type Three='Hello'

//convert to more or less specific type
let a:One='Hello'
let b = a as Two //assignment to less specific type
let c = b as Three //assignment to more specific type
//Typescript allows to convert to more or less specific type with 'as' keyword

let d= <One>'world' //type alias
let e= <string | number>'world'

//Practical example of type assertion
const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if(c ==='add'){
        return a + b
    }
    return '' + a + b
}

let myVal: string = addOrConcat(2,2,'concat') as string 
console.log(myVal);
//Be careful! TS sees no problem - but a string is required
let nextVal: number = addOrConcat(2,2,'concat') as number 
console.log(nextVal);

// Force Casting or Double Casting (not recommended)

// To define 10 as string
(10 as unknown) as string //force casting to unknown first and then to string

// The DOM
const img=document.querySelector('img')! //non-null assertion operator
const myImg=document.getElementById('#img') as HTMLImageElement //type assertion
const nextImg=<HTMLImageElement>document.getElementById('#img') //This will not work in TSX file

