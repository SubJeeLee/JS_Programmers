function solution(arr, queries) {
    let answer = [];
    queries.map(([a,b,c]) => {
        let tmp = [];
        for(let i =a;i<=b;i++) tmp.push(arr[i]);
        let check = tmp.filter(element => c < element);
        check.length > 0 ? answer.push(Math.min(...check)) : answer.push(-1);
    });
    return answer;
}

console.log(solution([0, 1, 2, 4, 3],[[0, 4, 2],[0, 3, 2],[0, 2, 2]]));


//다른 풀이
function solution(arr, queries) {
    return queries.map(([s, e, k]) => arr.slice(s, e + 1).filter((n) => n > k).sort((a, b) => a - b)[0] || -1);
}