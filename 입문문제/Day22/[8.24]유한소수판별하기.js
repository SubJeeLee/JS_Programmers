function solution(a, b) {
    function gcdRecursive(a, b) {
        if (b === 0) {
            return a;
        }
        return gcdRecursive(b, a % b);
    }
    let tmp = b / gcdRecursive(a,b);

    let arr =[];
    while(tmp % 2=== 0){
        arr.push(2);
        tmp /= 2;
    }
    for(let i = 3; i<=Math.sqrt(tmp); i+=2){
        while(tmp%i === 0){
            arr.push(i);
            tmp /= i;
        }
    }
    if (tmp>2) arr.push(tmp);
    
    return arr.filter(a => a !== 2 && a !== 5).length > 0 ? 2 : 1;
}   

console.log(solution(12,21));
console.log(solution(11,22));
console.log(solution(7,20));

//다른 풀이
function solution(a, b) {
    let n = 1;
    for (let i = 1; i <= Math.min(a,b); i++) {
        if (a%i===0 && b%i===0) n = i;
    }
    b/=n;
    while (b%2===0) b/=2;
    while (b%5===0) b/=5;

    return b === 1 ? 1 : 2;   
}