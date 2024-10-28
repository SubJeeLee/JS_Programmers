function solution(s) {
    const gualho = {
        ")":"(",
        "]":"[",
        "}":"{",
    };
    let tmp = [...s];
    let cnt = 0;
    
    function check(arr){
        let stack = [];
        for(let char of arr){
            if(stack[stack.length-1] === gualho[char] && stack.length !== 0){
                stack.pop();
            }
            else
                stack.push(char);
        }
        return stack.length === 0 ? 1 : 0;
    }
    
    for(let i =0 ;i<tmp.length;i++){
        cnt += check(tmp);
        tmp.push(tmp.shift());
    }
    return cnt;
}