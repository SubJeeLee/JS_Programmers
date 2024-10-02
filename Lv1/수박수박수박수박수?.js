function solution(n) {
    return n%2 == 0 ? "수박".repeat(n/2) : "수박".repeat(parseInt(n/2)) + "수";
    
}

// n	return
// 3	"수박수"
// 4	"수박수박"