console.log('\n\nLogical Operators\n')

let x: number = 35; 
console.log('\nCheck >\n');
if (x > 0){
    console.log('x = ' + x);
    console.log('x is greater than 0');
} else {
    console.log('x = ' + x);
    console.log('x is less than 0');
}

x = -1; 

if (x > 0){
    console.log('x = ' + x);
    console.log('x is greater than 0');
} else {
    console.log('x = ' + x);
    console.log('x is less than 0');
}

let y: number = 25;
console.log('\nCheck ==\n');
if (x == y){
    console.log('x = ' + x + '\ny = ' + y + ' \nx is equal with y' )
} else {
    console.log('x = ' + x + '\ny = ' + y + ' \nx is not equal with = y' )
}

x = 100;
y = 100;

if (x == y){
    console.log('x = ' + x + '\ny = ' + y + ' \nx is equal with y' )
} else {
    console.log('x = ' + x + '\ny = ' + y + ' \nx is not equal with y' )
}

let name1: string = "John";

console.log('\nCheck ===\n');

if ((typeof x)===(typeof name1)){
    console.log('x =  ' + x);
    console.log('x is a type of: ' + typeof(x));
    console.log('name1 =  ' + name1);
    console.log('name1 is a type of: ' + typeof(name1));
    console.log('x has the same type as name1');
} else {
    console.log('x =  ' + x);
    console.log('x is a type of: ' + typeof(x));
    console.log('name1 =  ' + name1);
    console.log('name1 is a type of: ' + typeof(name1));
    console.log('x has a diferent type than name1');
}

let name2: string = 'Mary';

if ((typeof name2)===(typeof name1)){
    console.log('name1 =  ' + name1);
    console.log('name1 is a type of: ' + typeof(name1));
    console.log('name2 =  ' + name2);
    console.log('name2 is a type of: ' + typeof(name2)); 
    console.log('name2 has the same type as name1');
} else {
    console.log('name1 =  ' + name1);
    console.log('name1 is a type of: ' + typeof(name1));
    console.log('name2 =  ' + name2);
    console.log('name2 is a type of: ' + typeof(name2)); 
    console.log('name2 has a diferent type than name1');
}



console.log('\nCheck !=\n');

if (x != y){
    console.log('x = ' + x + '\ny = ' + y + ' \nx is not equal with y' )
} else {
    console.log('x = ' + x + '\ny = ' + y + ' \nx is equal with y' )
}

y = 101;

if (x != y){
    console.log('x = ' + x + '\ny = ' + y + ' \nx is not equal with y' )
} else {
    console.log('x = ' + x + '\ny = ' + y + ' \nx is equal with y' )
}

console.log('\nCheck if x > 0 and return boolean value\n');

let isGreater: boolean = true;
if (x > 0){
    console.log('x = ' + x);
    console.log(isGreater);
} else {
    console.log('x = ' + x);
    isGreater = false;
    console.log(isGreater);
}

x = -100;

if (x > 0){
    console.log('x = ' + x);
    console.log(isGreater);
} else {
    console.log('x = ' + x);
    isGreater = false;
    console.log(isGreater);
}

console.log('\nCheck if x < 0 and return boolean value\n');

let isLess: boolean = true;
if (x < 0){
    console.log('x = ' + x);
    console.log(isLess);
} else {
    console.log('x = ' + x);
    isLess = false;
    console.log(isLess);
}

x = 100;

if (x < 0){
    console.log('x = ' + x);
    console.log(isLess);
} else {
    console.log('x = ' + x);
    isLess = false;
    console.log(isLess);
}

console.log('\nCheck if x >= 0 and return boolean value\n');

let isGreaterOrEqual: boolean = true;
if (x >= 0){
    console.log('x = ' + x);
    console.log(isGreaterOrEqual);
} else {
    console.log('x = ' + x);
    isGreaterOrEqual = false;
    console.log(isGreaterOrEqual);
}

x = 0;

if (x >= 0){
    console.log('x = ' + x);
    console.log(isGreaterOrEqual);
} else {
    console.log('x = ' + x);
    isGreaterOrEqual = false;
    console.log(isGreaterOrEqual);
}

x = -100

if (x >= 0){
    console.log('x = ' + x);
    console.log(isGreaterOrEqual);
} else {
    console.log('x = ' + x);
    isGreaterOrEqual = false;
    console.log(isGreaterOrEqual);
}

console.log('\nCheck if x <= 0 and return boolean value\n');

let isLessOrEqual: boolean = true;
if (x <= 0){
    console.log('x = ' + x);
    console.log(isLessOrEqual);
} else {
    console.log('x = ' + x);
    isLessOrEqual = false;
    console.log(isLessOrEqual);
}

x = 0;

if (x <= 0){
    console.log('x = ' + x);
    console.log(isLessOrEqual);
} else {
    console.log('x = ' + x);
    isLessOrEqual = false;
    console.log(isLessOrEqual);
}

x = 100

if (x <= 0){
    console.log('x = ' + x);
    console.log(isLessOrEqual);
} else {
    console.log('x = ' + x);
    isLessOrEqual = false;
    console.log(isLessOrEqual);
}

console.log('\nCreate two variables "num1" and "num2" of type number and assign them values of 10 and 5, respectively.');
console.log('Use the greater than operator to compare num1 and num2 and store the result in a variable "result".');
console.log('Use the logical AND operator to check if num1 is greater than 5 and num2 is less than 10 and store the result in a variable "result".');
console.log('Use the logical OR operator to check if num1 is greater than 15 or num2 is less than 2 and store the result in a variable "result".\n');

let num1: number = 10;
let num2: number = 5;
let result1: boolean = true;
let result2: boolean = true;
let result3: boolean = true;

console.log("num1 = 10 and num2 = 5");

if (num1 > num2){
    result1 = true;
    console.log('num1 > num2 evaluates as: ' + result1);    
} else {
    result1 = false;
    console.log('num1 > num2 evaluates as: ' + result1); 
}

if ((num1 > 5) && (num2 < 10)){
    result2 = true;
    console.log('num1 > 5 AND num2 < 10 evaluates as: ' + result2);
} else {   
    result2 = false;
    console.log('num1 > 5 AND num2 < 10 evaluates as: ' + result2);  
}

if ((num1 > 15) || (num2 < 2)){
    result3 = true;
    console.log('num1 > 15 OR num2 < 2 evaluates as: ' + result3);    
} else {
    result3 = false;
    console.log('num1 > 15 OR num2 < 2 evaluates as: ' + result3);
}

console.log('\n\nControl statement _ if else');

let myNumber : number = 10;

if (myNumber >=10){
    console.log('My number is greater than 5');
} else {
    console.log('myNumber is less than or equal to 5');    
}

console.log('\n\nControl statement _ switch');

let day: string = 'day'; 
let dayNumber: number = 5;
console.log('weekday number is 5')
switch (dayNumber) { 
case 1: day = "Monday"; dayNumber = 1;
console.log('Today is ' + day);
break; 
case 2: day = "Tuesday"; dayNumber = 2;
console.log('Today is ' + day);
break; 
case 3: day = "Wednesday"; dayNumber = 3;
console.log('Today is ' + day);
break; 
case 4: day = "Thursday"; dayNumber = 4;
console.log('Today is ' + day);
break; 
case 5: day = "Friday"; dayNumber = 5;
console.log('Today is ' + day);
break; 
case 6: day = "Saturday"; dayNumber = 6;
console.log('Today is ' + day);
break; 
case 7: day = "Sunday"; dayNumber = 7;
console.log('Today is ' + day);
break;
default: console.log('not a valid day number');
}

console.log('\n\nControl statement _ for');


for (let i: number = 1; i < 11; i++){
    console.log(i);
}

console.log('\n\nControl statement _ while');

//let i: number = 0;
let count: number = 0;
while(count < 10){
    count++;
    console.log(count)
}

console.log('\n\nControl statement _ do while');
let count1: number = 11

do {count1--; console.log(count1)}
while ( count1 > 1);


console.log('\n\nControl statement _ while increment');

let count2: number = 0;
while(count2 < 11)
{
    count2++;
    if (count2 == 10)
    {console.log(count2)};

}

console.log('\n\nControl statement _ Functions');

let add = (x: number, y: number): number => {
    return x + y;
}

console.log('sum of 3 and 5 is: ' + add(3, 5));

function multiply(x: number, y: number): number{
    return x * y;    
}

console.log('multiplication of 3 by 5 is: ' + multiply(3, 5));

function isEven (x:number): boolean {
    let isEven: boolean = true;
    
    if (x % 2 == 0){
        isEven = true;
        console.log('number ' + x + ' is even')
    } else {
        
        console.log('number ' + x + ' is not even')
    }
    return isEven;
}

isEven(121);
isEven(120);


function greet (name: string){

    console.log("Hello " + name)
}

greet('John');



console.log('\n\nControl statement _ Try Catch');
function myErrorFunction() {
    throw new Error('this can be a custom error');
}

function mySyntaxErrorFunction() {
    throw new SyntaxError('this is a Syntax error');
}

function myRangeErrorFunction() {
    throw new RangeError('this is a range error');
}

try {
    myErrorFunction();
    //mySyntaxErrorFunction()
} catch (error: unknown){
    if (error instanceof Error){
    console.log('A1', error.message);
    console.log('A2', error.name); 
    console.log('A3', error.stack); 
    } 
} finally {
    console.log('this is executed anyway')
}

try {
    //myErrorFunction();
    mySyntaxErrorFunction()
} catch (error: unknown){
    if (error instanceof SyntaxError){
        console.log('B1', error.message);
        console.log('B2', error.name); 
        console.log('B3', error.stack);
    } 
} finally {
    console.log('this is executed anyway')
}

try {
    //myErrorFunction();
    myRangeErrorFunction()
} catch (error: unknown){
    if (error instanceof RangeError){
        console.log('C1', error.message);
        console.log('C2', error.name); 
        console.log('C3', error.stack);
    } 
} finally {
    console.log('this is executed anyway')
}

















