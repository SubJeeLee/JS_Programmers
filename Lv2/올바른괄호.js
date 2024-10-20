function solution(s){
    let stack = [];
    if(s[0] === ")") return false;
    [...s].forEach(e =>{
        if(e ===")"){
            if(stack[stack.length-1] === "(") stack.pop();
        }
        else stack.push(e);
    });
    return stack.length > 0 ? false : true;
}

// s	answer
// "()()"	true
// "(())()"	true
// ")()("	false
// "(()("	false