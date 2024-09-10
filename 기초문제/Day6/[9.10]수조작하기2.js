function solution(numLog) {
    const keyMapping = {
        '1': 'w',
        '-1': 's',
        '10': 'd',
        '-10': 'a'
    };
    
    let answer = numLog.slice(1).map((value, index) => {
        const difference = value - numLog[index];
        return keyMapping[difference];
    });
    
    return answer.join('');
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));


//다른 풀이
function solution(numLog) {
    const convert = {
        '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
    };

    return numLog.slice(1).map((v, i) => {
        return convert[v - numLog[i]]
    }).join('')
}