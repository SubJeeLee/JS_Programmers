function solution(A,B){
    let arr = A.split("");
    let answer = [];
    for(let i =0;i<A.length;i++){
        if(arr.join('') === B){
            answer.push(i);
            break;
        }
        let tmp = arr.pop();
        arr.unshift(tmp);
    }
    return answer.length > 0 ? answer[0] : -1;
}

console.log(solution("hello","ohell"));
console.log(solution("apple","elppa"));
console.log(solution('abc','abc'));

//다른 풀이
let solution=(a,b)=>(b+b).indexOf(a)

//다른 풀이
function solution(A, B) {
    if (A===B) return 0;
    for (let i = 0; i < A.length; i++) {
        A = A.slice(-1) + A.slice(0,-1);
        if (A === B) return i+1;
    }
    return -1;
}