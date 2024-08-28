const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    const arr = input[0].split('');
    arr.map(a => console.log(a));
});

//다른 풀이
[...input[0]].forEach(a => console.log(a));