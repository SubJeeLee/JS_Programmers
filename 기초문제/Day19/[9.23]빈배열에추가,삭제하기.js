function solution(arr, flag) {
    let X = [];
    flag.map((e,i) => {
        if(e === true) X.push(...new Array(arr[i]*2).fill(arr[i]));
        else X.splice(-arr[i],arr[i]);
    })
    return X;
}

console.log(solution([3, 2, 4, 1, 3],[true, false, true, false, false]));


//다른 풀이
function solution(arr, flag) {
    return arr.reduce(
      (prev, num, i) => (flag[i] ? [...prev, ...new Array(num * 2).fill(num)] : prev.slice(0, -num)),
      [],
    );
  }