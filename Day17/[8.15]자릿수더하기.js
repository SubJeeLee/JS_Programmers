function solution(n) {
    return n.toString().split('').reduce((a,b) => Number(a) + Number(b), 0);
}

console.log(solution(0));


//reduce((a,b) => Number(a) + Number(b), 0)
//초기값이 없는 경우:
//배열의 첫 번째 요소가 누적 값으로 사용되며, 배열의 두 번째 요소부터 계산이 시작됩니다.
//빈 배열에서는 오류가 발생합니다. (빈 배열에서 초기값이 없으면 reduce는 오류를 발생시킵니다.)
