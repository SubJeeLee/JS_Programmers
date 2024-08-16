function solution(my_string) {
    return my_string.toLowerCase().split('').sort().join('');
}

console.log(solution("Bcad"));


//잘 푼 풀이
function solution(s) {
    return [...s.toLowerCase()].sort().join('')
}