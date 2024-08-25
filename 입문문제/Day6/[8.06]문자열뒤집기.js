function solution(my_string) {
    let reversed = '';
    for (let i = my_string.length - 1; i >= 0; i--) {
      reversed += my_string[i];
    }
    return reversed;
}

console.log(solution('jaron'))


// function solution(my_string) {
//     return my_string.split('').reverse().join('');
// }

// 위 예제에서는 split('')을 사용하여 문자열을 각 문자로 분할한 후, 
// reverse()를 호출하여 배열을 뒤집고, join('')을 사용하여 다시 문자열로
//  연결하였습니다. 이렇게 하면 문자열이 뒤집힌 결과를 얻을 수 있습니다.