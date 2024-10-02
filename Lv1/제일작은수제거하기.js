function solution(arr) {
    return arr.length === 1 ? [-1] : arr.filter(e => e !== Math.min(...arr));
   }

// arr	return
// [4,3,2,1] [4,3,2]
// [10]	[-1]