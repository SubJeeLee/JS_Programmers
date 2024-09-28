function solution(arr) {
    let tmp = arr.map((e,i) => e === 2 ? i : -1).filter(index => index !== -1);
    if(tmp.length === 0) return [-1]
    else return tmp.length > 1 ? arr.slice(tmp[0],tmp[tmp.length-1]+1) : [arr[tmp[0]]];
}
console.log(solution([1,2,1]));

//다른 풀이
function solution(arr) {
    const from = arr.indexOf(2);
    const end = arr.lastIndexOf(2);
    
    return from === -1 ? [-1] : arr.slice(from, end+1);
}