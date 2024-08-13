function solution(order) {
    return String(order).split('').filter(number => number === '3' || number === '6' || number === '9').length;
}
//filter 는 조건에 맞는 요소만을 추출함

//다른 방법
function solution(order) {
    let sum = 0;
    String(order).split('').map(number => {
        // 문자열 '3', '6', '9'와 비교
        if (number === '3' || number === '6' || number === '9') {
            sum += 1;
        }
    });
    return sum;
}