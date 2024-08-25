function solution(my_string, n) {
    let arr = my_string;
    let answer = '';
    for(let i = 0; i<arr.length; i++) answer += arr[i].repeat(n);
    return answer;
}

console.log(solution('hello',3));



// ----  잘 푼 사람 풀이 -------
// function solution(my_string, n) {
//     var answer = [...my_string].map(v => v.repeat(n)).join("");
//     console.log(answer);
//     return answer;
// }
