function solution(numbers) {
    let sum = 0;
    numbers.forEach(num => {
        sum += num; 
    });
    return sum/numbers.length;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(solution(numbers));


//JS는 파이썬에서 in 처럼 of 를 사용해서 배열의 요소를 가져올수있다
// function solution(numbers) {
//     var answer = 0;
//     for(i of numbers) {
//         answer += i
//     }
//     return answer / numbers.length;
// }