function solution(my_string, is_prefix) {
    let tmp = [];
    for(let i =0;i<my_string.length;i++){
        tmp.push(my_string.slice(0,i));
    }
    return tmp.includes(is_prefix) ? 1: 0;
}


//다른 풀이
//boolean 앞에 +를 붙여주면 true는 1, false는 0으로 변환해줌
function solution(my_string, is_prefix) {
    return +my_string.startsWith(is_prefix);
  }