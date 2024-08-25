function solution(array) {
    array.sort((a,b) => a -b);
    //숫자 배열을 정렬하려면 비교 함수를 제공해야 한다. 
    let midIndex = Math.floor(array.length / 2); 
    return array[midIndex];
}

let arr = [1,2,7,10,11];
console.log(solution(arr));

