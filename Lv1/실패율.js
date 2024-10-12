function solution(N, stages) {
    let sortedArr = stages.sort((a,b) => a-b);
    let setArr = Array.from(new Set(sortedArr));
    
    const tmp = sortedArr.reduce((acc, item, index) => {
        if (!acc[item]) {
            acc[item] = { count: 1, startIndex: index }; // 새로운 원소 추가
        } else {
            acc[item].count += 1; // 카운트 증가
        }
        return acc;
    }, {});
    
    const check = setArr.reduce((acc,item,i) => {
        acc[item] = tmp[setArr[i]].count / (sortedArr.length - tmp[setArr[i]].startIndex); 
        return acc;
    }, {});
    
    const answer = Object.entries(check)
        .sort(([keyA, valueA], [keyB, valueB]) => {
            if (valueB === valueA) {
                return keyA - keyB; // 같은 값일 때 key로 정렬
            }
            return valueB - valueA; // 내림차순
        })
        .map(([key]) => Number(key));    
    
    for(let i =1;i<=N;i++){
        if(!answer.includes(i)) answer.push(i);
    }
    return answer.filter(e => e <= N);
    
}

// N	stages	result
// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
// 4	[4,4,4,4,4]	[4,1,2,3]