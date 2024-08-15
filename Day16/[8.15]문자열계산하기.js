function solution(my_string) {
    let arr = my_string.split(' ');
    let answer = Number(arr[0]);
    for(let i = 1;i<arr.length;i+=2){
        let op = arr[i];
        let num = Number(arr[i+1]);
        if(op === '+') answer += num;
        else answer -= num;
    }
    return answer;
}

console.log(solution("3 + 4"));