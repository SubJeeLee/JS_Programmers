function solution(array) {
    array.sort();
    let compareNum = array[0];
    let count = 1;
    let maxNum = 1;
    if (array.length <= 1){
        return array[0];
    }else{
        for(let i =1; i <= array.length; i++){
            if (maxNum < count){
                answer = compareNum;
                maxNum = count;
            }else if(maxNum === count){
                answer = -1;
            }
            if (compareNum != array[i]){
                compareNum = array[i];
                count = 1;
            }else{
                count++;
            }
        }
        return answer;
    } 
}

let arr = [1,1,2,2];
console.log(solution(arr));

//----------- 잘푼 사람 풀이 -------------

// function solution(array) {
//     let m = new Map();  // 1. 빈 Map 객체를 생성
//     for (let n of array) 
//         m.set(n, (m.get(n) || 0) + 1);  // 2. 배열의 각 요소를 Map에 추가하거나 업데이트하여 빈도수를 기록

//     m = [...m]  // 3. Map 객체를 배열로 변환
//         .sort((a, b) => b[1] - a[1]);  // 4. 배열을 빈도수 기준으로 내림차순 정렬

//     // 5. 최빈값이 유일한지 확인
//     return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
// }
