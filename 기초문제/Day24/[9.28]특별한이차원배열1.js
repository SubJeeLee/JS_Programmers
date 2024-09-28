function solution(n) {
    const array = new Array(n);
    for(let i =0;i<n;i++){
        array[i] = new Array(n).fill(0);
        array[i][i] = 1;
    }
    return array;
}