let arr = 'aBcDeFg';
let A = arr.split('')
for(let i = 0;i<A.length;i++){
    if(A[i] === A[i].toLowerCase()) A[i] = A[i].toUpperCase();
    else A[i] = A[i].toLowerCase();
}
console.log(A.join(''));


//다른 풀이

let input =['aBcDeFg'];
let str = input[0];
const regex = /[A-Z]/;
console.log([...str].map((v)=> regex.test(v) ? v.toLowerCase() : v.toUpperCase()).join(''))