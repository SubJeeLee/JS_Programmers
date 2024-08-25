// function solution(quiz) {
//     let answer = [];
//     for(let i = 0; i<quiz.length;i++){
//         let arr = quiz[i].split(' ');
//         let result = arr[1] === '+' ? Number(arr[0]) +  Number(arr[2]) : Number(arr[0]) - Number(arr[2]);    
//         answer.push(Number(arr[4]) === result ? "O" : "X");
//     }
//     return answer;
// }

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]));

// 잘 푼 풀이
function solution(quiz) {
    var answer = [];
    return quiz.map(t => {
        const [calc, result] = t.split(' = ');
        console.log(calc,result);
        const sign = calc.includes('+') ? 1 : -1
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

        return +a + (+b * sign) === +result ? 'O' : 'X'
    });
}