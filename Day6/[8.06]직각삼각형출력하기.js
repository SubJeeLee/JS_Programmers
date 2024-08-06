const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);
    let Star = '';
    for (let i = 1; i<=n; i++){
       for (let j = 0; j <i; j++){
            Star += '*';
        }
        Star+='\n';
    }
    console.log(Star);
});

// -------------- 잘 푼 사람 풀이 ----------------
// for (let i = 1; i <= +input[0]; i++) {
//     console.log('*'.repeat(i));
// }