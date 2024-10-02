function solution(s) {
    return s.length%2===1 ? s[parseInt(s.length/2)] : s.slice(s.length/2-1,s.length/2+1);
}

// s	return
// "abcde"	"c"
// "qwer"	"we"