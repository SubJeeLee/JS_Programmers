function solution(strArr) {
    let answer = [];
    for(let i =0;i<strArr.length;i++){
        if(!strArr[i].includes("ad")) answer.push(strArr[i])
    }
return answer;
}

console.log(solution(["and","notad","abcd"]));

//다른 풀이
const solution = strArr => strArr.filter(v => !v.includes('ad'))