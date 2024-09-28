function solution(my_string) {
    return my_string.trim().split(/ +/);
    //공백이 하나 이상일때 +를 붙임
    //trim은 앞뒤 공백 제거
}

//다른 풀이
function solution(my_string) {
    return my_string.split(' ').filter(v => v);
}