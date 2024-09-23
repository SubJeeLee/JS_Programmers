function solution(arr, k) {
    const mySet = new Set(arr); 
    const newArr = Array.from(mySet);

    while (newArr.length < k) {
        newArr.push(-1);
    }
    return newArr.slice(0, k);
}
console.log(solution([0, 1, 1, 2, 2, 3],3));
console.log(solution([0, 1, 1, 1, 1],4));


//다른 풀이
function solution(arr, k) {
    return [...Array.from(new Set(arr)), ...new Array(k).fill(-1)].slice(0,k);
}