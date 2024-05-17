"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_1 = require("./service");
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
app.post('/process_orders', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = req.body;
        if (!data || !data.items) {
            throw new Error('Invalid request body: Missing data or items property');
        }
        //FilterOut the Orders whose any  OrderBlockʼs  LineNo is divisible by 3
        const filteredOrders = data.items.filter((order) => order.OrderBlocks.every((block) => block.lineNo % 3 !== 0));
        console.log('Filtered orders:', filteredOrders);
        //Now store orderIDs in your postgres database
        const filteredOrderIDs = filteredOrders.map((order) => order.orderID);
        yield (0, service_1.storeFilteredOrderIDs)(filteredOrderIDs);
        res.status(201).json({ message: 'Orders stored successfully' });
    }
    catch (error) {
        console.error('Error processing orders:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
//Excercise with the all  array functions by taking array of your own choice
app.post('/array', (req, res) => {
    const array = req.body.array;
    const newArray1 = array.concat([6, 7, 8]);
    console.log("Concat:", newArray1);
    const index = array.lastIndexOf(4);
    console.log("LastIndexOf:", index);
    array.push(10);
    console.log("Push", array);
    const lastnumber = array.pop();
    console.log("Poped Element", lastnumber);
    const splicedArray = array.splice(1, 3);
    console.log("Splice:", splicedArray);
    console.log(array);
    const slicedArray = array.slice(2, 3);
    console.log("Slice:", slicedArray);
    const mappedArray = array.map((item) => item * 2);
    console.log("Map:", mappedArray);
    const shiftedItem = array.shift();
    console.log("Shift:", shiftedItem);
    array.unshift(0);
    console.log("Unshift:", array);
    const filteredArray = array.filter((item) => item > 6);
    console.log("Filter:", filteredArray);
    array.forEach((item) => console.log("ForEach:", item));
    const flattenedArray = array.flat();
    console.log("Flat:", flattenedArray);
    const foundItem = array.find((item) => item === 9);
    console.log("Find:", foundItem);
    const joinedString = array.join("-");
    console.log("Join:", joinedString);
    const foundIndex = array.findIndex((item) => item === 7);
    console.log("FindIndex:", foundIndex);
    const stringRepresentation = array.toString();
    console.log("ToString:", stringRepresentation);
    const someResult = array.some((item) => item > 3);
    console.log("Some:", someResult);
    const stringToSplit = "Hello Manas";
    const splitArray = stringToSplit.split(" ");
    console.log("Split:", splitArray);
    const everyResult = array.every((item) => item > 0);
    console.log("Every:", everyResult);
    const replacedString = stringToSplit.replace("Manas", "Yeole");
    console.log("Replace:", replacedString);
    const includesResult = array.includes(8);
    console.log("Includes:", includesResult);
    const indexOfItem = array.indexOf(9);
    console.log("IndexOf:", indexOfItem);
});
const students = [
    { name: "Alice", age: 20, grade: 75 },
    { name: "Bob", age: 22, grade: 85 },
    { name: "Charlie", age: 21, grade: 60 },
    { name: "David", age: 19, grade: 45 },
    { name: "Eve", age: 20, grade: 90 },
];
function filterPassedStudents(students) {
    return students.filter((student) => student.grade >= 50);
}
const passedstudents = filterPassedStudents(students);
console.log("passed_students:", passedstudents);
function getStudentNames(students) {
    return students.map((student) => student.name);
}
const studentNames = getStudentNames(students);
console.log("Student Names:", studentNames);
function sortStudentsByGrade(students) {
    return students.slice().sort((a, b) => a.grade - b.grade);
}
const sortedStudents = sortStudentsByGrade(students);
console.log("Sorted Students by Grade:", sortedStudents);
function getAverageAge(students) {
    const totalAge = students.reduce((acc, student) => acc + student.age, 0);
    return totalAge / students.length;
}
const averageAge = getAverageAge(students);
console.log("Average Age:", averageAge);
app.listen(port, () => {
    console.log("We are comfortable with nodejs");
});
//# sourceMappingURL=app.js.map