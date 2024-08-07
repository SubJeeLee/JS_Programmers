function solution(numbers, num1, num2) {
    return numbers.slice(num1,num2+1);
}

//slice는 arr = [1,2,3,4,5]
//arr.slice(1,3) => [2,3]