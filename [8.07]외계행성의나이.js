function solution(age) {
    let alpha = 'abcdefghij';
    let ageString = (age.toString());
    let answer ='';
    for(let i = 0; i<ageString.length; i++){
        answer += alpha[ageString[i]];
    }
    return answer;
}

console.log(solution(23));

//잘 푼 사람 풀이
function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}