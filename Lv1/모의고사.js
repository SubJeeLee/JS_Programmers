function solution(answers) {
    let answer = [];
    const F = [1,2,3,4,5];
    const S = [2,1,2,3,2,4,2,5];
    const T = [3,3,1,1,2,2,4,4,5,5];
    
    let aF = answers.filter((a,i)=> a === F[i%F.length]).length;
    let aS = answers.filter((a,i)=> a === S[i%S.length]).length;
    let aT = answers.filter((a,i)=> a === T[i%T.length]).length;
    let max = Math.max(aF,aS,aT);

    if (aF === max) answer.push(1);
    if (aS === max) answer.push(2);
    if (aT === max) answer.push(3);
    return answer;
}

// answers	return
// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]