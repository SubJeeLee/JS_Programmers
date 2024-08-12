function solution(strlist) {
    let answer = [];
    strlist.forEach(function(len) {
        answer.push(len.length);
    });
    return answer; 
}

console.log(solution(["I", "Love", "Programmers."]));

//잘 푼 풀이
function solution(strlist) {
    return strlist.map((el) => el.length)
}