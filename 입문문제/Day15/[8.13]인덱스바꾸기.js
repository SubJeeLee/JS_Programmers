function solution(my_string, num1, num2) {
    let arr = my_string.split('');
    let tmp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = tmp;
    return arr.join('');
}

//잘 푼 사람 풀이
function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}
//js에서는 구조분해할당이라는 것이 있다.