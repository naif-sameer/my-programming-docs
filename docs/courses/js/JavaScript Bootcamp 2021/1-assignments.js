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
