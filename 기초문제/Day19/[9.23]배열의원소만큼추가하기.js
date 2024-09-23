const solution=a=>a.map(v=>Array(v).fill(v)).flat();

//다른 풀이
function solution(arr) {
    return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}