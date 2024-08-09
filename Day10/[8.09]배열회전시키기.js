function solution(numbers, direction) {
    let tmp = []
    if(direction === "right"){
        tmp = numbers.pop();
        numbers.unshift(tmp);
    }
    else{
        tmp = numbers.shift();
        numbers.push(tmp);
    }
    return numbers;
}