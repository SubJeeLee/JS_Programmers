function solution(num) {
    let cnt = 0;
    while(num !== 1){
        if(num%2 === 0){
            num/=2;
            cnt++;
        }else{
            num = num*3 + 1;
            cnt++;
        } 
    }
    return cnt > 500 ? -1 : cnt;
}


//다른풀이
function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}