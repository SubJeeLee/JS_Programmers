function solution(num_list) {
    function div(num){
        let cnt = 0;
        while(num > 1){
            if(num%2 ===0){
                num /= 2;
                cnt++;
            }  
            else{
                num = (num-1)/2;
                cnt++;
            } 
        }
        return cnt;
    }
    
    return num_list.map(e => div(e)).reduce((a,b) => a+b);
}

console.log(solution([12, 4, 15, 1, 14]));

//다른 풀이
function solution(num_list) {
    return num_list.map(v => v.toString(2).length - 1).reduce((a, c) => a + c);
}