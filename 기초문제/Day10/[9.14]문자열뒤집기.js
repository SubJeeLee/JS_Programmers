function solution(my_string, s, e) {
    let arr = [...my_string];
    let tmp = arr.slice(s,e+1).reverse();
    arr.splice(s,e-s+1,...tmp);
    return arr.join('');
}

console.log(solution("Progra21Sremm3",6,12));

//문자열을 배열로 변환하고 splice()로 부분을 교체하는 방식은 올바르지만, 
//splice()의 반환값은 변경된 배열의 부분이므로 이를 다시 문자열로 변환할 때 주의가 필요합니다.

