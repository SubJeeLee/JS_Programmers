function solution(a, d, included) {
    let answer = 0;
    included.forEach((element,idx) => {
        if(element) answer += a+idx*d
    });
    return answer;
}