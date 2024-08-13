// function solution(numbers) {
//     const obj = {
//         zero: 0, one: 1, two: 2, three: 3, four: 4,
//         five: 5, six: 6, seven: 7, eight: 8, nine: 9
//     };

//     const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
//         return obj[v];
//     });

//     return Number(num);
// }

// 예제 사용
console.log(solution("onefourzerosixseven")); // 14067


//또 다른 풀이
function solution(numbers) {
    const number = ["zero","one","two","three", "four", "five", "six", "seven", "eight", "nine"]
    for(let i = 0 ; i<number.length; i++){
        numbers = numbers.split(number[i]).join(i)
    }
    return +numbers
}
