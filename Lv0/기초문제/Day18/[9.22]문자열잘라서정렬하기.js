function solution(myString) {
    return myString.split('x').filter(v => v !=='').sort();
}

console.log(solution("axbxcxdx"));

//다른풀이

const solution=s=>s.match(/[^x]+/g).sort();