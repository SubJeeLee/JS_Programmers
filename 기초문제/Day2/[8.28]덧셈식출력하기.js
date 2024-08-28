const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let a = input[0];
    let b = input[1];
    let sum = Number(a) + Number(b);
    console.log(a + " + " + b + " = " + sum);
});


//다른 풀이
const [a, b] = line.split(' ')
console.log(a, '+', b, '=', Number(a) + Number(b))

//다른 풀이
// const a = Number(input[0]);
// const b = Number(input[1]);
// console.log(`${a} + ${b} = ${a+b}`)