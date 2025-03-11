function solution(k, tangerine) {
    let countMap = new Map();

    // 귤 크기별 개수 세기
    for (let t of tangerine) {
        countMap.set(t, (countMap.get(t) || 0) + 1);
    }

    // 개수를 내림차순으로 정렬
    let sortedCounts = [...countMap.values()].sort((a, b) => b - a);

    let cnt = 0;
    for (let n of sortedCounts) {
        k -= n;
        cnt++;
        if (k <= 0) return cnt;
    }
    
    return cnt;
}

// function solution(k, tangerine) {
//     let obj = {};
//     let cnt = 0;
//     // 각 귤의 종류별로 갯수를 세기
//     tangerine.forEach(e => {
//         obj[e] = (obj[e] || 0) + 1;
//     });
//     const sortedA = Object.values(obj).sort((a, b) => b - a);
//     //console.log(sortedA);
    
//     for(let n of sortedA){
//         k -= n;
//         cnt++;
//         if(k <= 0){
//             return cnt;
//         }
//     }
//     return cnt;
// }

// k	tangerine	result
// 6	[1, 3, 2, 5, 4, 5, 2, 3]	3
// 4	[1, 3, 2, 5, 4, 5, 2, 3]	2
// 2	[1, 1, 1, 1, 2, 2, 2, 3]	1
