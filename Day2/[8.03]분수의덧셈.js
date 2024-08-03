function solution(numer1, denom1, numer2, denom2) {
    let bunmo = denom1 * denom2;
    let bunja = numer1 * denom2 + numer2 * denom1;
    let minNum = bunmo < bunja ? bunmo: bunja;
    while(minNum > 1) {
        if(bunmo % minNum === 0 && bunja % minNum === 0){
            bunmo /= minNum;
            bunja /= minNum;
        }
        else{
            minNum -= 1;
        }
    }
    return [bunja, bunmo];
}

let n1 = 9;
let d1 = 2;
let n2 = 1;
let d2 = 3;

console.log(solution(n1,d1,n2,d2));


