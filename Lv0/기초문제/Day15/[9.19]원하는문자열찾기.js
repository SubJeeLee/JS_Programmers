function solution(myString, pat) {
    return myString.toUpperCase().includes(pat.toUpperCase()) ? 1 : 0;
}

//다른풀이
function solution(myString, pat) {
    return +(myString.toUpperCase().includes(pat.toUpperCase()));
}

console.log(solution("abcd","aB"));