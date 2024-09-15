function solution(arr, idx) {
    let answer =[];
     arr.map((e,i) => {
        if(i >= idx && e === 1) answer.push(i);
    });
     return answer.length >0 ? Math.min(...answer) : -1;
 }


//다른 풀이
//array.indexOf(searchElement[, fromIndex])
const solution=(a,i)=>a.indexOf(1,i);