function solution(my_string) {
    let arr = my_string.split(' ');
    console.log(arr);
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        if(i % 2 === 1) sum = arr[i] === '+' ? sum + Number(arr[i-1]) + Number(arr[i+1]) : sum + Number(arr[i-1]) - Number(arr[i+1]);
    }
    return sum;
}

console.log(solution("3 + 4 - 5"));