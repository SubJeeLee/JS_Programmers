function solution(start_num, end_num) {
    let answer =[];
    for(let i =start_num;i<=end_num;i++) answer.push(i);
    return answer; 
}

//다른 풀이
function solution(start, end) {
    return Array(end-start+1).fill(start).map((x,idx) => x+idx);
}