import express, {Request , Response} from 'express';
import {storeFilteredOrderIDs} from './service';
const app = express();
const port  = 8000;
interface OrderBlock {
  lineNo: number;
  productCode: string;
}

interface Order {
  orderID: string;
  orderInvoiceNo: string;
  OrderBlocks: OrderBlock[];
}

app.use(express.json());

app.post('/process_orders', async (req: Request, res: Response) => {
  try {
    const { data } = req.body; 
    if (!data || !data.items) {
      throw new Error('Invalid request body: Missing data or items property');
    }
    //FilterOut the Orders whose any  OrderBlockʼs  LineNo is divisible by 3
    
    const filteredOrders: Order[] = data.items.filter((order: Order) =>
      order.OrderBlocks.every((block: OrderBlock) => block.lineNo % 3 !== 0)
    );
    
    console.log('Filtered orders:', filteredOrders);
    //Now store orderIDs in your postgres database
    
    const filteredOrderIDs = filteredOrders.map((order) => order.orderID);

    await storeFilteredOrderIDs(filteredOrderIDs);
    
    res.status(201).json({ message: 'Orders stored successfully' });
  } catch (error) {
    console.error('Error processing orders:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//Excercise with the all  array functions by taking array of your own choice
app.post('/array',(req,res)=>
  {
  
    const array= req.body.array;
    const newArray1: number[] = array.concat([6, 7, 8]);
   console.log("Concat:", newArray1);

   const index: number = array.lastIndexOf(4);
   console.log("LastIndexOf:",index);

   array.push(10);
   console.log("Push",array);


   const lastnumber=array.pop();
   console.log("Poped Element",lastnumber);


   const splicedArray: number[] = array.splice(1, 3);
   console.log("Splice:", splicedArray);
   console.log(array);


   const slicedArray: number[] = array.slice(2, 3);
  console.log("Slice:", slicedArray);


  const mappedArray: number[] = array.map((item:any) => item * 2);
  console.log("Map:", mappedArray)



  const shiftedItem: number | undefined = array.shift();
  console.log("Shift:", shiftedItem);


  array.unshift(0);
  console.log("Unshift:", array);


  const filteredArray: number[] = array.filter((item:any) => item > 6);
  console.log("Filter:", filteredArray);

  array.forEach((item:any) => console.log("ForEach:", item));


  const flattenedArray: number[] = array.flat();
  console.log("Flat:", flattenedArray)

  const foundItem: number | undefined = array.find((item:any) => item === 9);
 console.log("Find:", foundItem);
 
 const joinedString: string = array.join("-");
 console.log("Join:", joinedString);
 
 const foundIndex: number = array.findIndex((item:any) => item === 7);
 console.log("FindIndex:", foundIndex);

 const stringRepresentation: string = array.toString();
 console.log("ToString:", stringRepresentation);

 const someResult: boolean = array.some((item:any) => item > 3);
 console.log("Some:", someResult);
 
 const stringToSplit: string = "Hello Manas";
 const splitArray: string[] = stringToSplit.split(" ");
 console.log("Split:", splitArray);
 
 const everyResult: boolean = array.every((item:any) => item > 0);
 console.log("Every:", everyResult);
 

 const replacedString: string = stringToSplit.replace("Manas", "Yeole");
 console.log("Replace:", replacedString);

 const includesResult: boolean = array.includes(8);
 console.log("Includes:", includesResult);


 const indexOfItem: number = array.indexOf(9);
 console.log("IndexOf:", indexOfItem);

  })
  





  
  interface Student {
    name: string;
    age: number;
    grade: number;
  }

  const students:Student[] = [
    { name: "Alice", age: 20, grade: 75 },
    { name: "Bob", age: 22, grade: 85 },
    { name: "Charlie", age: 21, grade: 60 },
    { name: "David", age: 19, grade: 45 },
    { name: "Eve", age: 20, grade: 90 },
  ];


  function filterPassedStudents(students:Student[]): Student[]{
    return students.filter((student) => student.grade >= 50);
  }
  const passedstudents = filterPassedStudents(students);
  console.log("passed_students:",passedstudents);

 function getStudentNames(students:Student[]):string[] {
return students.map((student) => student.name);
 }
 const studentNames = getStudentNames(students);
 console.log("Student Names:", studentNames);

 function sortStudentsByGrade(students: Student[]): Student[] {
  return students.slice().sort((a, b) => a.grade - b.grade);
 }
 const sortedStudents = sortStudentsByGrade(students);
 console.log("Sorted Students by Grade:", sortedStudents);

 function getAverageAge(students: Student[]): number {
  const totalAge = students.reduce((acc, student) => acc + student.age, 0);
  return totalAge / students.length;
}

const averageAge = getAverageAge(students);
console.log("Average Age:", averageAge);






app.listen(port,()=>{
    console.log("We are comfortable with nodejs");

})