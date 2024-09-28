function solution(arr, k) {
    return k%2===1 ?  arr.map(e=>e*k) : arr.map(e=> e+k);
}