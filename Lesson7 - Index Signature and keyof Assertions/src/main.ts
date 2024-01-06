//Index Signature comes in handy when we don't know the exact keys of an object

// interface TransactionObj{
//     Pizza: number;
//     Books: number;
//     Job: number;
// }

interface TransactionObj{
    [index: string]: number;
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 100
}

// It also helpful in Dynamic access of object properties

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

let prop: string = 'Pizza';
// It will throw an error because it is not sure that the prop will be a key of todaysTransactions
console.log(todaysTransactions[prop]);

const todaysNet=(transactions: TransactionObj):number=>{
    let total = 0;
    for (const transaction in transactions){
        total += transactions[transaction];
    }
    return total;
}
console.log(todaysNet(todaysTransactions));

//This will not throw an error because it thinks that the prop will be a key of todaysTransactions and return number
console.log(todaysTransactions['Nisarg'])

/////////////////////////////////////////

interface Student{
    //[key: string]:string | number | number[] | undefined;
    name: string;
    GPA: number;
    classes?: number[];
}

const student:Student = {
    name: 'Nisarg',
    GPA: 3.5,
    classes: [100,200]
}

//console.log(student.test);
for(const key in student){
    //console.log(`${key}: ${student[key]`)
    console.log(`${key}: ${student[key as keyof Student]}`)
}

//keyof example with object
Object.keys(student).map(key=>{
    console.log(student[key as keyof typeof student])
})

const logStudentKey=(student: Student, key: keyof Student):void =>{
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA')
logStudentKey(student, 'name')

/////////////////////////////////////////////

// interface Incomes{
//     [key: string]: number;   
// }

//Another way of using keyof with Type

type Streams = 'Salary' | 'Bonus' | 'SideHustle'

//Record is a utility type which takes two arguments, first is the keys and second is the type of value

type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
    Salary: 500,
    Bonus: 100,
    SideHustle: 250
}

for(const revenue in monthlyIncomes){
    //This will throw an error because it is not sure that the revenue will be a key of monthlyIncomes
    //console.log(monthlyIncomes[revenue])
    console.log(monthlyIncomes[revenue as keyof Incomes])
}