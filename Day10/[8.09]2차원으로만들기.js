function solution(num_list, n) {
    let answer = [];
    for (let i = 0; i < num_list.length/n; i++) {
        answer.push(num_list.slice(i * n, i * n + n));
    }
    return answer;
}

//잘푼 사람 풀이
function solution(num_list, n) {
    var answer = [];

    while(num_list.length) {
        answer.push(num_list.splice(0,n));
    }

    return answer;
}

//splice는 자바스크립트 배열의 메서드로, 
//배열의 기존 요소를 삭제하거나 교체하거나 추가할 수 있다.