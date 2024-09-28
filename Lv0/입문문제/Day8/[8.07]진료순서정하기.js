function solution(emergency) {
    let newArr = emergency.slice();
    let answer = [];
    let sortedArr = newArr.sort((a,b) => b-a);
    for(let i = 0;i<emergency.length;i++){
        for(let j = 0; j<sortedArr.length; j++){
            if(emergency[i] === sortedArr[j]) answer.push(j+1);
        }
    }
    return answer;
}

console.log(solution([3,76,24]));

//여기서 주의할점이 
//1. 프로그래머스는 toSorted()를 지원하지 않음
//2. 배열의 깊은 복사 & 얕은 복사에 대해서 잘 알도록 ! ex) slice()


//잘 푼 풀이
//배열에서는 map과 indexOf를 잘 사용하도록!
function solution(emergency) {
    let sorted = emergency.slice().sort((a,b)=>b-a);
    return emergency.map(v=>sorted.indexOf(v)+1);
}
