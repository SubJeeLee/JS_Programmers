function solution(n, w, num) {
    let arr = [];
    let isLeftToRight = true; 
    let count = 1;

    for (let i = 0; i < Math.ceil(n / w); i++) {
        let row = Array.from({ length: w }, (_, j) => count <= n ? count++ : 0); 
        if (!isLeftToRight) row.reverse();
        arr.push(row); 
        isLeftToRight = !isLeftToRight; 
    }
    
    // arr.forEach(row => console.log(row.join(" ")));

    let rowIdx = arr.findIndex(row => row.includes(num));
    let colIdx = rowIdx !== -1 ? arr[rowIdx].indexOf(num) : -1; 
    
    let cnt = 0;
    for (let i = rowIdx + 1; i < arr.length; i++) {
        if (arr[i][colIdx] !== 0) {
            cnt++;
        }
    }

    return cnt+1;
}

// n	w	num	result
// 22	6	8	3
// 13	3	6	4
