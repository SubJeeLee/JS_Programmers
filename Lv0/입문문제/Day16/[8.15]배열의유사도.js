function solution(s1, s2) {
    let count = 0;
    for(let i = 0; i<s1.length;i++){
        for(let j = 0 ;j<s2.length;j++){
            if(s1[i] === s2[j]) count += 1;
        }
    }
    return count;
}

console.log(solution(["n", "omg"],["m", "dot"]))

//잘 푼 풀이
function solution(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}