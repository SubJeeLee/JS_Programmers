// function solution(array, n) {
//     let tmp = [];
//     let inDex =[];
//     array.forEach(function(e) {
//         tmp.push(Math.abs(n-e));
//     });
//     let minValue = Math.min(...tmp);
//     tmp.forEach((element,index) => {
//         if (element === minValue) inDex.push(array[index]);
//     });
//     if(inDex.length > 1) return Math.min(...inDex);
//     else return array[tmp.indexOf(Math.min(...tmp))];
// }

console.log(solution([3,30,10],20));



// 잘 푼 사람 풀이
function solution(array, n) {
    array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
    //n과의 차이의 절댓값이 가장 작은 값을 우선적으로 정렬합니다
    
    return array[0];
}
//js에서의 sort는 정렬 기준을 정하는 것에 대해서 자세하게 공부 할 필요가 있다.