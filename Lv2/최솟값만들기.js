function solution(A,B){
    let sortedA = A.sort((a,b) => a-b);
    let sortedB = B.sort((a,b) => b-a);

    // const answer = sortedA.reduce((acc, curr, index) => {
    //     return acc + (curr * sortedB[index]);
    // },0)
    // return answer;
    return sortedA.reduce((acc, curr, index) => acc + curr * sortedB[index],0)
}

// A	B	answer
// [1, 4, 2]	[5, 4, 4]	29
// [1,2]	[3,4]	10