function solution(score) {
    const arr = score.map(([a,b]) => ((a + b)/2))
    let arrS = [...arr].sort((a,b) => b-a);
    let ranks = arr.map(e => arrS.indexOf(e) + 1);
    return ranks;
}

console.log(solution([[80, 70], [90, 50], [40, 70], [50, 80]]))
console.log(solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]))