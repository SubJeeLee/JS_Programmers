function solution(arr) {
    let i =1;
    while(true){
        if(i>=arr.length) break;
        i*=2;
    }
    return [...arr,...Array(i-arr.length).fill(0)];
}

console.log(solution([1, 2, 3, 4, 5, 6]));

//다른 풀이
function solution(arr) {
    const length = arr.length;
    const totalLength = 2 ** Math.ceil(Math.log2(length));
    return [...arr, ...new Array(totalLength - length).fill(0)];
  }
  