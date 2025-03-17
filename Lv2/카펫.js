function solution(brown, yellow) {
    let sum = brown + yellow;
    
    for (let height = 3; height <= sum / height; height++) {
        if (sum % height === 0) {
            let width = sum / height;
            if ((width - 2) * (height - 2) === yellow) {
                return [width, height];
            }
        }
    }
    
    return [];
}

// function solution(brown, yellow) {
//     let sum = brown + yellow;
//     let arr = [];
    
//     // 약수 찾기
//     for(let i = 3; i <= Math.sqrt(sum); i++) {
//         if(sum % i === 0) arr.push(i);
//     }
    
//     for (let e of arr) {
//         let width = e - 2;
//         let height = (sum / e) - 2;
//         if (width * height === yellow) {
//             return [Math.max(width, height) + 2, Math.min(width, height) + 2];
//         }
//     }
    
//     return [];
// }

// brown yellow	return
// 10	2	[4, 3]
// 8	1	[3, 3]
// 24	24	[8, 6]
