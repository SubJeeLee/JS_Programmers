function solution(A, B) {
    let sortedA = A.sort((a, b) => a - b); 
    let sortedB = B.sort((a, b) => b - a);

    return sortedA.map((e, i) => e * sortedB[i]).reduce((a, b) => a + b);
}

// A	B	answer
// [1, 4, 2]	[5, 4, 4]	29
// [1,2]	[3,4]	10
