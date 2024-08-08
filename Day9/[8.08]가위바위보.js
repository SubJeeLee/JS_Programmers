function solution(rsp){
    // let arr = rsp.split("").map(String);
    let answer = [...rsp].map(function(a){
        if(a === '2') return 0 ; else if(a==='0') return 5; else return 2;
    });
    return answer.join("");
}
console.log(solution("205"));



//잘 푼 사람 풀이(1)
function solution(rsp) {
    return rsp.split("").map((v) => v==="2" ? 0 : (v==="0" ? 5 : 2)).join("")
}

//잘 푼 사람 풀이(2)
function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}

// 붙어있는 문자열을 배열로 바꾸는 방법 ->  ...
// ex) arr = "205"  -> [...arr]

