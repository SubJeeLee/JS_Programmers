function gcd(a,b) {
    return b === 0 ? a : gcd(b, a%b);
}

function giyak(num1, num2) {
    while (gcd(num1,num2) != 1) {
        let temp = gcd(num1,num2);
        num1 /= temp;
        num2 /= temp;
        console.log(num1,num2);
    }
    return [num1,num2];
}

let numer1 = 9;
let denom1 = 2;
let numer2 = 1;
let denom2 = 3;


if (denom1 == denom2){
    let denominator = denom1;
}else {
    denominator = denom1 * denom2;
    numer1 *= denom2;
    numer2 *= denom1;
} 
let numerator = numer1 + numer2;
console.log(numerator,denominator);

console.log(giyak(numerator,denominator));


