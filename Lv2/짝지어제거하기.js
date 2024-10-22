function solution(s)
{
    let answer = [];
    [...s].forEach(e=> {
        if(answer.length === 0)
            answer.push(e);
        else{
            if(answer[answer.length-1] === e) answer.pop();
            else answer.push(e);
        }
    });
    return answer.length === 0 ? 1 : 0;
}

// s	result
// baabaa	1
// cdcd	0