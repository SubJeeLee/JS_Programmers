function solution(my_string){
    return my_string.match(/\d+/g)?.reduce((a,b) => a + Number(b),0) || 0;
}
//match 결과가 null 일때 ?로 인하여 reduce 연산을 수행하지않고 0 을 바로 반환
//reduce에서 초기값 0이 매우 중요함!
//초기값이 0으로 들어가지기 때문에 문자여도 숫자로 계산이됨
console.log(solution("abcd"));
