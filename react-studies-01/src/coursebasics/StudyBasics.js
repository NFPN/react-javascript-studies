/* Reviewing the basics

//Functions are good, but could have problems with ".this"
function PrintMyName(name)
{
  console.log(name);
}

//Use this to keep context
const PrintMyName = (name) =>
{
  console.log(name);
}

//Omit parentheses when there's only one
const PrintMyName = name =>
{
  console.log(name);
}
const PrintMyName = (name, age) =>
{
  console.log(name, age);
}

//console.log(Multiply(9));
const Multiply = number =>
{
  return number * 2;
}

//Shortened version (like in C#)
const Multiply = number => number * 2;

//-------------- person.js ------------------
const person = { name: 'Wallker'}
export default person 
//-------------- utility.js ------------------
export const clean = () => {};
export const baseDataNumber = 10;
//-------------- app.js ------------------
import person from './person.js';
import prs from '.person.js';
import { baseDataNumber } from './Basics.js';
import { clean } from './Basics.js'; //can also be used as import { clean as cln } from './ExerciseCodes.js'; for a named export
import * as bundled from  './Basics.js'


//------------- classes ----------------
// creation
class PersonA 
{
  name = 'AName';
  call = () => {};
}

//usage
const myPersonA = new PersonA();
myPersonA.call();
console.log(myPersonA.name);

//inheritance
class PersonB extends PersonA {}
const myPersonB = new PersonB();
myPersonB.call();
console.log(myPersonB.name);

//constructor usage

class Human
{
  constructor()
  {
    this.gender = 'male'
  }
  PrintGender = () => console.log(this.gender); 
}

class APerson extends Human
{
  constructor() 
  {
    super(); //When using extends and constructor this is needed on base classes
    this.name = 'Wallker'
    // this.gender = 'female'
  }
  PrintName = () => console.log(this.name);
}


//NextGen JS
//can omit "constructor()" and arrow function  like PersonA class

//------------------- Spread & Rest Operators -------------------

//Spread
const newArray = [...oldArray,1,2];
const newObject = {...oldObject, newProp:5};

//Rest
function SortArgs (...args)//...args is any array
{ 
  return args.sort(); 
}

//usage
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const personObj = 
{
  name:'Test'
};
const newPersonObj = 
{
  ...personObj,
  age:20
}
console.log(newPersonObj);


const filter = (...args) => 
{
  return args.filter(el => el === 1);//=== compares equality of value and type
}

//------------ Destructuring ---------------

//Array
[a,b] = ['Hello', 'World'];
console.log(a);//Hello
console.log(b);//World

[num1, , num3] = numbers;
console.log(num1, num3);

//Object
const aobj = 
{
  nameTest: 'AName', 
  age:20
};

const {nameTest} = aobj;
console.log(nameTest); // prints 'AName'
console.log(age); // prints undefined
console.log(myObj); // prints {nameTest: 'AName', age: 20}

//------------ Referencing ------------

const number01 = 1;
const number02 = number01; // number02 is a copy! because is a primitive type

const person01 = { name: 'person01'};
const person02 = person01; // this is a pointer to person01! also happens with arrays!
const person03 = {...person01};// this is a copy!!


//------------ Array functions ------------
// map, find, findIndex, filter, reduce, concat, slice, splice
const arrayNumbers = [1,2,3];

const doubleArrayNumbersv1 = arrayNumbers.map((num) =>{ 
  return num * 2
});

const doubleArrayNumbersv2 = arrayNumbers.map(num => num * 2);


*/