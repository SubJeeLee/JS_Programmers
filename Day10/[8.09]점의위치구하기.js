// function solution(dot) {
//     if(dot[0] > 0 && dot[1] > 0) return 1;
//     else if(dot[0] < 0 && dot[1] > 0) return 2;
//     else if(dot[0] < 0 && dot[1] < 0) return 3;
//     else return 4;
// }

//잘 푼 사람 풀이

function solution(dot) {
    const [num,num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}
console.log(solution([3,2]));