function solution(myString, pat) {
    return myString.slice(0,myString.lastIndexOf(pat[pat.length-1])+1); 
}

console.log(solution("AbCdEFG","dE"));