function solution(a, b) {
    let sum = 0;
    for(let i =0;i<a.length; i++) sum += a[i] * b[i];
    return sum;
}

// a	b	result
// [1,2,3,4] [-3,-1,0,2]	3
// [-1,0,1]	[1,0,-1]	-2