function solution(num, total) {
    let answer = [];
    let first = (total - (num * (num-1))/2) / num;
    for(let i =0 ;i<num;i++) answer.push(first + i);
    return answer;
}

console.log(solution(3,12));


//다른 풀이
function solution(num, total) {
    const bae=(total-(num*(num-1)/2))/num;
    console.log(bae)
    return Array.from(Array(num),(_,i)=>i+bae)
}