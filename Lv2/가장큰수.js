function solution(numbers) {
    let arr = numbers.map(String);
    arr.sort((a,b) => {
        let ab = a + b;
        let ba = b + a;
        if(ab > ba) return -1;
        if(ab < ba) return 1;
        return 0;
    });
    if (arr[0] === "0") {
        return "0";
    }
    console.log(arr);
    
    return arr.join('');
}

//좋은 풀이
function solution(numbers) {
    let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
    return answer[0] === '0' ? '0' : answer;
}

// 입출력 예
// numbers	return
// [6, 10, 2]	"6210"
// [3, 30, 34, 5, 9]	"9534330"
