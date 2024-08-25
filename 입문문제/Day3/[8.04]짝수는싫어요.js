function solution(n) {
    let answer = [];
    for(let i =1; i <= n; i += 2){
        answer.push(i);
    }
    return answer;
}

let num = 15;
console.log(solution(num));

// push(): 배열의 끝에 요소를 추가합니다.
// unshift(): 배열의 시작 부분에 요소를 추가합니다.
// **전개 연산자 (...)**와 concat(): 기존 배열을 변경하지 않고 
//새로운 배열을 생성할 때 사용합니다.