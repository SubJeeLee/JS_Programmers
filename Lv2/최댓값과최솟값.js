function solution(s) {
    let answer = s.split(" ");
    return `${Math.min(...answer)} ${Math.max(...answer)}`;
}

// s	return
// "1 2 3 4"	"1 4"
// "-1 -2 -3 -4"	"-4 -1"
// "-1 -1"	"-1 -1"