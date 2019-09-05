'use strict'

var params = process.argv.slice(2);
var number1 = parseFloat(params[0]);
var number2 = parseFloat(params[1]);

var layout = `
    Sum is: ${number1 + number2}
    Substraction is: ${number1 - number2}
    Multiplication is: ${number1 * number2}
    Division is: ${number1 / number2}
`;
console.log(layout);