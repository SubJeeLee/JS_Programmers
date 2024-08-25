function solution(s) {
    let answer = '';
    let arr = s.split('').sort()
    const countMap = arr.reduce((acc,item) => {
        acc[item] = (acc[item] || 0) +1;
        return acc;
    },{});
    //countmap = { a: 3, b: 2, c: 3, d: 1 }
    for (const [key,value] of Object.entries(countMap)){
        if(value === 1 ) answer += key;
    }
    return answer;
}
console.log(solution("hello")); //eho


//잘 푼 풀이
function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}