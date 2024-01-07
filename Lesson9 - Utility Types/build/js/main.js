"use strict";
// Utility Types are a set of built-in generic types that can be used to simplify the typing of common patterns.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propstoUpdate) => {
    return Object.assign(Object.assign({}, assign), propstoUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Required and Readonly 
//Required utitlity type is the opposite of Partial. It takes an existing type and makes all of its properties required.
const recordAssignment = (assign) => {
    //Send to Database
    return assign;
};
// Readonly utility type takes an existing type and makes all of its properties readonly.
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignVerified), { verified: true }));
//Record utility type takes a union of keys and creates a type where the keys are mapped to the same type.
const hexColorMap = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};
const finalGrades = {
    Sara: "B",
    Kelly: "U"
};
const gradeData = {
    Sara: { maths: 95, science: 90 },
    Kelly: { maths: 75, science: 15 }
};
const score = {
    studentId: "compsci123",
    grade: 85
};
const preview = {
    studentId: "compsci123",
    title: "Final Project"
};
// ReturnType Type
// ReturnType utility type takes a function type and creates a new type from the return type of the function.
//type newAssign ={title: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err.message);
        }
    });
    return data;
});
fetchUser().then(users => {
    console.log(users);
});
