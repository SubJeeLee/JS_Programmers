function solution(n) {
    let sum = 1;
    for(let i =2; i<=n;i++){
        sum +=1;
        if(sum % 3 === 0 || String(sum).includes('3')){
            while(true){
                sum += 1
                if(sum % 3 !== 0 && String(sum).includes('3') !== true) break;
            }
        }
        console.log(i,sum);
    }
    return sum;
}
