function solution(arr, queries) {
    for(let i =0;i<queries.length;i++){
        let [a,b] = queries[i];
        let tmp = arr[b];
        arr[b] = arr[a];
        arr[a] = tmp; 
    }
    return arr;
}

console.log(solution([0,1,2,3,4],[[0, 3],[1, 2],[1, 4]]));


//다른 풀이
function solution(arr, queries) {
    queries.forEach( ([a,b]) => {
        [arr[a],arr[b]] = [arr[b],arr[a]];
    })
    return arr;
}