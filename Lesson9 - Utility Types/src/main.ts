// Utility Types are a set of built-in generic types that can be used to simplify the typing of common patterns.

// Partial Type is a generic type that takes an existing type and makes all of its properties optional.

interface Assignment{
    studentId: string;
    title: string;
    grade: number;
    verified?: boolean;
}

const updateAssignment=(assign: Assignment, propstoUpdate: Partial<Assignment>): Assignment=>{
    return {...assign, ...propstoUpdate};
}

const assign1:Assignment={
    studentId:"compsci123",
    title:"Final Project",
    grade: 0
}

console.log(updateAssignment(assign1,{grade: 95}))
const assignGraded:Assignment = updateAssignment(assign1,{grade: 95}) 

// Required and Readonly 

//Required utitlity type is the opposite of Partial. It takes an existing type and makes all of its properties required.

const recordAssignment=(assign: Required<Assignment>): Assignment=>{
    //Send to Database
    return assign;
}

// Readonly utility type takes an existing type and makes all of its properties readonly.

const assignVerified:Readonly<Assignment>={...assignGraded, verified: true};

recordAssignment({...assignVerified, verified: true})

//Record utility type takes a union of keys and creates a type where the keys are mapped to the same type.

const hexColorMap: Record<string, string> = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
}

type Students=  "Sara" | "Kelly"
type LetterGrade="A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrade> = {
    Sara: "B",
    Kelly: "U"
}

interface SubjectGrades{
    maths: number;
    science: number;
}

const gradeData:Record<Students, SubjectGrades> = {
    Sara: {maths: 95, science: 90},
    Kelly: {maths: 75, science: 15}
}

// Pick and Omit Types

// Pick utility type takes an existing type and creates a new type from a subset of its properties.

type AssignResult=Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "compsci123",
    grade: 85
}

// Omit utility is different from Pick in that it creates a new type from a subset of properties that are not included.

type AssignPreview=Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "compsci123",
    title: "Final Project"
}

// Exclude and Extract Types works with String Literal Types, Numeric Literal Types, and Union Types.

// Exclude utility type takes a union type and creates a new type by excluding some types from another type.

type adjustedGrade=Exclude<LetterGrade, "U">

// Extract utility type takes a union type and creates a new type by extracting some types from another type.

type highGrades=Extract<LetterGrade, "A" | "B">

// NonNullable Type

// NonNullable utility type takes an existing type and creates a new type by removing null and undefined from the type.

type AllPossibleGrades ="Nisarg" | "Thakkar" | null | undefined

type NamesOnly=NonNullable<AllPossibleGrades>

// ReturnType Type

// ReturnType utility type takes a function type and creates a new type from the return type of the function.

//type newAssign ={title: string, points: number}

const createNewAssign =(title:string, points: number)=>{
    return {title, points}
}

type NewAssign=ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)

console.log(tsAssign)

// Parameters Type

// Parameters utility type takes a function type and creates a new type from the parameter types of the function.

type AssignParams=Parameters<typeof createNewAssign>

const assignArgs:AssignParams=["Generics", 100]

const tsAssign2: NewAssign=createNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited Type

// Awaited utility type takes a Promise type and creates a new type from the resolved type of the Promise.

// It help us with ReturnType of Promise

interface User{
    id: string;
    name: string;
    username: string;
    email: string;
}

const fetchUser = async (): Promise<User[]>=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users'
    ).then(res=>{
        return res.json()
    }).catch(err=>{
        if(err instanceof Error){
            console.log(err.message)
        }
    })
    return data;
}

type FetchUserReturnType = Awaited<ReturnType<typeof fetchUser>>

fetchUser().then(users=>{
    console.log(users)
})

