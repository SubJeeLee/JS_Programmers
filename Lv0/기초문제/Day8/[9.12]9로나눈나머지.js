function solution(number){
    let sum = 0;
    [...number].map((e) =>{
        sum += Number(e);
    });
    return sum % 9 ;
}
console.log(solution('123'));

//다른 풀이
function solution(number) {
    return Array.from(number).reduce((acc, v) => acc + Number(v), 0) % 9
}

//다른 풀이
function solution(number) {
    return [...number].reduce((a,b) => +a+(+b))%9;
}