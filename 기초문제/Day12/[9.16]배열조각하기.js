function solution(arr, query) {
    query.map((e,i) => {
        if(i% 2 === 0) arr = arr.slice(0,e+1);
        else arr = arr.slice(e,arr.length+1);
    })
    return arr;
}

//다른 풀이
function solution(arr, query) {
    var answer = [];
    query.map((v,i)=>i%2?arr.splice(0,v):arr.splice(v+1))
    return arr;
}