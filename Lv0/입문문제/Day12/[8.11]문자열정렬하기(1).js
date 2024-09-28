function solution(my_string) {
    let number = my_string.replace(/[a-zA-Z]/g,'').split('')
    return number.sort((a,b)=> a - b).map(Number);
}

console.log(solution("p2o4i8gj2"));

//잘푼 풀이
function solution(my_string) {
    return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
}

// \d는 숫자를 나타냄 