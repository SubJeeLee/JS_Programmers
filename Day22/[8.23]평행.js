function solution(dots) {
    let answer = 0;
    function xcheck(a,b,c,d){
        if((Math.abs(dots[a][1] - dots[b][1])/ Math.abs(dots[a][0] - dots[b][0])) === (Math.abs(dots[c][1] - dots[d][1])/ Math.abs(dots[c][0] - dots[d][0]))) return true;
        else return false;
    }
    if(xcheck(0,1,2,3)) answer = 1;
    if(xcheck(0,2,1,3)) answer = 1;
    if(xcheck(0,3,1,2))  answer = 1;
    return answer === 0 ? 0 : 1; 
}

console.log(solution([[1, 2], [5, 1], [3, 6], [6, 3]]));

//두직선의 기울기가 같다면 평행하거나 일치하는 것이다.