function solution(my_string, n) {
    return my_string.split('').reverse().slice(0,n).reverse().join('');
}

//다른 사람 풀이
function solution(my_string, n) {
    return my_string.slice(-n)
}