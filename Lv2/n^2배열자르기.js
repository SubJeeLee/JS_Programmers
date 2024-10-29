function solution(n, left, right) {
    const result = [];

    for (let index = left; index <= right; index++) {
        const row = Math.floor(index / n); 
        const col = index % n; 
        const value = Math.max(row + 1, col + 1); 
        result.push(value);
    }

    return result;
}


// n	left	right	result
// 3	2	5	[3,2,2,3]
// 4	7	14	[4,3,3,3,4,4,4,4]