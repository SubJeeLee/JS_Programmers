function solution(s) {
    let arr = s.split(' ');
    for(let i = 0; i<arr.length;i++){
        if(arr[i] === 'Z'){
        arr.splice(i-1,2);
        i--;
        }
        console.log(arr);
    }
    if(arr.length > 0) return arr.map(Number).reduce((a,b) => a + b); 
    else return 0;
}

console.log(solution("10 Z 20 Z"));
