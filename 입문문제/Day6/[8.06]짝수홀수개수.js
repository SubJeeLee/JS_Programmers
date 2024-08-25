function solution(num_list) {
    let even = 0;
    let odd = 0;
    num_list.forEach(element => {
        if(element % 2 == 0) even+=1; else odd+=1;
    });
    return [even,odd];
}

console.log(solution([1,3,5,7]));


//---------- 잘 푼 사람 풀이 -----------

// function solution(num_list) {
//     var answer = [0,0];

//     for(let a of num_list){
//         answer[a%2] += 1
//     }

//     return answer;
// }