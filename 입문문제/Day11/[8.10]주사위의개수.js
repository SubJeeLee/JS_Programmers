function solution(box, n) {
    let answer = 1;
    box.forEach(function(element){
        answer *= Math.floor(element/n);
    });
    return answer;
}