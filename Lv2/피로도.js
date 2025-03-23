function solution(k, dungeons) {
    let answer = 0;
    
    // 던전을 필요한 체력이 적은 순으로 정렬
    dungeons.sort((a, b) => a[0] - b[0]);

    // 던전을 차례대로 탐험
    let count = 0;
    let currentK = k;
    for (const [need, use] of dungeons) {
        if (currentK >= need) {
            currentK -= use;  // 던전 클리어 후 체력 감소
            count++;
        } else {
            break;  // 체력이 부족하면 더 이상 클리어할 수 없음
        }
    }

    answer = Math.max(answer, count);
    return answer;
}

// function getPermutations(arr, r) {
//     if (r === 1) return arr.map((item) => [item]);

//     let permutations = [];
//     arr.forEach((value, index) => {
//         const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
//         const subPerms = getPermutations(rest, r - 1);
//         subPerms.forEach((perm) => permutations.push([value, ...perm]));
//     });

//     return permutations;
// }

// function solution(k, dungeons) {
//     let answer = 0;
//     const allPermutations = getPermutations(dungeons, dungeons.length);

//     allPermutations.forEach((order) => {
//         let count = 0;
//         let currentK = k;
//         //console.log(order);
//         for (const [need, use] of order) {
//             if (currentK >= need) {
//                 currentK -= use;
//                 count++;
//                 answer = Math.max(answer, count);
//             } else {
//                 break; 
//             }
//         }
//     });

//     return answer;
// }

// k	dungeons	result
// 80	[[80,20],[50,40],[30,10]]	3
// 78  [[78, 18], [70, 11], [67, 9], [60, 8], [59, 2], [57, 54]]  4
