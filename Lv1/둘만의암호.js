function solution(s, skip, index) {
    let answer = [];
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    
    // skip 문자열의 문자들을 alpha에서 제거
    for (let e of skip) {
        alpha = alpha.replace(new RegExp(e, 'g'), '');
    }
    
    for (let char of s) {
        let currentIndex = alpha.indexOf(char);
        if (currentIndex === -1) {
            // 만약 현재 문자가 alpha에 없다면 그대로 추가
            answer.push(char);
            continue;
        }
        
        // 이동할 인덱스 계산
        let newIndex = currentIndex + index;
        if (newIndex >= alpha.length) {
            newIndex = newIndex % alpha.length; // 모듈로 연산으로 인덱스 조정
        }
        
        answer.push(alpha[newIndex]);
    }
    
    return answer.join('');
}
// s	skip	index	result
// "aukks"	"wbqd"	5	"happy"

//다른풀이
function solution(s, skip, index) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                      "u", "v", "w", "x", "y", "z"].filter(c => !skip.includes(c));
    return s.split("").map(c => alphabet[(alphabet.indexOf(c) + index) % alphabet.length]).join("");
}