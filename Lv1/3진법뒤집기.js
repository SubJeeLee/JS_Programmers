function solution(n) {
    let ternary = "";
    while (n > 0) {
        ternary += (n % 3);
        n = Math.floor(n / 3);
    }

    let reversedTernary = ternary.split('').reverse().join('');
    let result = 0;
    let power = 1;
    for (let i = 0; i < reversedTernary.length; i++) {
        result += (parseInt(reversedTernary[i]) * power);
        power *= 3;
    }

    return result;
}


//다른 풀이
//진법은 toString으로 간단하게 계산 가능!
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}