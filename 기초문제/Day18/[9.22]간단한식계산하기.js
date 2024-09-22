function solution(binomial) {
    let operations = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y
    };
    
    let [a,op,b] = binomial.split(' ');
    return operations[op](+a,+b);
}

console.log(solution("43 + 12"));