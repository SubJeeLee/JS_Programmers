function solution(s) {
    let arr = s.split(' ');
    for(let i = 0; i<arr.length;i++){
        if(arr[i] === 'Z'){
        arr.splice(i-1,2);
        i--;
        }
        console.log(arr);
    }
    if(arr.length > 0) return arr.map(Number).reduce((a,b) => a + b); 
    else return 0;
}

console.log(solution("10 Z 20 Z"));

//잘 푼 풀이
//스택의 개념을 이용한 풀이
// +target --> 단항덧셈연산자 = 문자열을 숫자로 변환가능
function solution(s) {
    const stack = []

    s.split(' ').forEach((target) => {
        if(target === 'Z') stack.pop();
        else stack.push(+target)
    })

    return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}
