/** Assignments */

// 001 to 009

/*********** 3 ***********/

console.log(
    '%cElzero %cWeb %cSchool',
    'color: red;',
    'color: green; font-weight: bold',
    'background-color: blue;'
);

/*********** 4 ***********/
console.group('Group 1');
console.log('message 1');
console.log('message 2');

// child group
console.group('Child group');
console.log('message 1');
console.log('message 2');

// grand child group
console.group('Grand Child Group');
console.log('message 1');
console.log('message 2');
console.groupEnd();
console.groupEnd();

console.groupEnd();

console.group('Group 2');
console.log('message 1');
console.log('message 2');
console.groupEnd();

/*********** 5 ***********/
console.table(['Elzero', 'Ahmed', 'Sameh', 'Gamal', 'Aya']);

/*********** 6 ***********/
/*
console.log('Iam In Console');
document.write('Iam In Page');
*/

// console.log('Iam In Console');
// document.write('Iam In Page');

/***********
 * 010 to 017
 ************/

/*********** 1 ***********/
let numOne = 10;
let numTwo = 20;

console.log(numOne + '' + numTwo);
console.log(typeof (numOne + '' + numTwo));

console.log(`${numOne}${numTwo}`);
console.log(typeof `${numOne}${numTwo}`);

console.log(numOne + '\n' + numTwo);

console.log(`${numOne}
${numTwo}`);

/*********** 3 ***********/
console.log("`I'm In \n\\\\ \nLove \\\\ \"\"\" '''\n++ With ++\n\\" + '"""\\"""\n""Javascript""``');

/*********** 4 ***********/
let a = 21;
let b = 20;

console.log(`_${`${a}_${b}`.repeat(4)}_`); // _21_2021_2021_2021_20_
