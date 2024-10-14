function solution(X, Y) {
    const countX = {};
    const countY = {};
    
    // X와 Y에서 각 숫자의 개수를 세기
    for (const num of X) {
        countX[num] = (countX[num] || 0) + 1;
    }
    for (const num of Y) {
        countY[num] = (countY[num] || 0) + 1;
    }

    
    // 공통된 숫자를 찾아서 결과 배열에 추가
    const answer = [];
    for (const num in countX) {
        if (countY[num]) {
            const occurrences = Math.min(countX[num], countY[num]);
            answer.push(num.repeat(occurrences)); // 해당 숫자를 반복해서 추가
        }
    }
    
    if (answer.length === 0) {
        return "-1";
    }
    console.log(answer);
    const result = answer.join('').split('').sort((a, b) => b - a).join('');
    return result[0] === '0' ? '0' : result;
}

// X	Y	result
// "100"	"2345"	"-1"
// "100"	"203045"	"0"
// "100"	"123450"	"10"
// "12321"	"42531"	"321"
// "5525"	"1255"	"552"