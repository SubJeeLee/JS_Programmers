function solution(polynomial) {
    let arr = polynomial.split(' ').filter(a => a !== '+');
    let xSum = 0; 
    let constantSum = 0; 

    function getXF(element) {
        let match = element.match(/^([+-]?\d*)x$/);
        if (match) {
            const coefficient = match[1];
            if (coefficient === '') return 1;
            if (coefficient === '-') return -1;
            return parseInt(coefficient);
        } else {
            return Number(element); // 숫자일 경우 해당 숫자를 반환
        }
    }

    arr.forEach(a => {
        let value = getXF(a);
        if (a.includes('x')) {
            xSum += value; // x의 계수를 더함
        } else {
            constantSum += value; // 상수항을 더함
        }
    });

    let result = '';
    if (xSum !== 0) {
        result += (xSum === 1 ? 'x' : xSum === -1 ? '-x' : xSum + 'x');
    }
    if (constantSum !== 0) {
        if (result !== '') result += ' + ';
        result += constantSum;
    }

    return result || '0'; // 결과가 빈 문자열이면 0 반환
}

console.log(solution("3x + 7 + 8 + x")); // "4x + 15"
console.log(solution("x + 5"));         // "x + 5"
console.log(solution("x - 5 + 3x"));    // "4x - 5"
console.log(solution("-x + 7 + 8"));    // "-x + 15"
console.log(solution("0 + 0"));         // "0"



//잘 푼 풀이
function solution(polynomial) {
    const arr = polynomial.split(" + ");
    const xNum = arr
                .filter(n => n.includes("x"))
                .map(n => n.replace('x', '') || '1')
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
    const num = arr
                .filter(n => !isNaN(n))
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

    let answer = [];
    if(xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
    if(num) answer.push(num);

    return answer.join(" + ");
}