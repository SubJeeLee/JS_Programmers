//두수의 합
function solution(num1, num2) {
    return num1 + num2;
}

//두수의 차
function solution(num1, num2) {
    return num1 - num2;
}

//두수의 곱
function solution(num1, num2) {
    return num1 * num2;
}

//몫 구하기
function solution(num1, num2) {
    return Math.floor(num1 / num2);
}

//두 수의 나눗셈 
function solution(num1, num2) {
    return Math.floor((num1/num2)*1000);
}

//숫자 비교하기
function solution(num1, num2) {
    let answer = num1 == num2 ? 1 : -1;
    return answer;

    // if (num1 == num2) {
    //     return 1;
    // }else {
    //     return -1;
    // }
}