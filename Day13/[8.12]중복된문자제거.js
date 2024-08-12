function solution(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (result.indexOf(str[i]) === -1) {
            result += str[i];
        }
    }
    return result;
}
console.log(solution("We are the world"));

//잘 푼 풀이
function solution(str) {
    return [...new Set(str)].join('');
}

//Set -> 중복된 값을 허용하지 않는 컬렉션.