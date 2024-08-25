function solution(n) {
    let result = [];
    for(let i = 2; n !== 1; i++){
        if(n % i === 0){
            while(n % i === 0){
                n /= i;
            }
            result.push(i);
        }
    }
    return result;
}