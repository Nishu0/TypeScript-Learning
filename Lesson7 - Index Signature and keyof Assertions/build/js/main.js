"use strict";
//Index Signature comes in handy when we don't know the exact keys of an object
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 100
};
// It also helpful in Dynamic access of object properties
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
// It will throw an error because it is not sure that the prop will be a key of todaysTransactions
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
//This will not throw an error because it thinks that the prop will be a key of todaysTransactions and return number
console.log(todaysTransactions['Nisarg']);
const student = {
    name: 'Nisarg',
    GPA: 3.5,
    classes: [100, 200]
};
//console.log(student.test);
for (const key in student) {
    //console.log(`${key}: ${student[key]`)
    console.log(`${key}: ${student[key]}`);
}
//keyof example with object
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
logStudentKey(student, 'name');
const monthlyIncomes = {
    Salary: 500,
    Bonus: 100,
    SideHustle: 250
};
for (const revenue in monthlyIncomes) {
    //This will throw an error because it is not sure that the revenue will be a key of monthlyIncomes
    //console.log(monthlyIncomes[revenue])
    console.log(monthlyIncomes[revenue]);
}
