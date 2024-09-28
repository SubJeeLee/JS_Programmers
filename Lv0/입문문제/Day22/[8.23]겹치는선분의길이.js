function solution(lines) {
    let visited = Array(200).fill(0);
    for(let i=0;i<lines.length;i++){
        for(let j = lines[i][0]; j<lines[i][1]; j++) visited[j+100] += 1;
    }
    console.log(visited);
    return visited.filter(v => v > 1).length;
}

console.log(solution([[-1, 1], [1, 3], [3, 9]]));
console.log(solution([[0, 5], [3, 9], [1, 10]]));
console.log(solution([[0, 1], [2, 5], [3, 9]]));


//다른 풀이
function solution(lines) {
    let line = new Array(200).fill(0);

    lines.forEach(([a, b]) => {
        for(; a < b; a++) line[a+100]++;
    });

    return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0)
}