function solution(s) {
    let cnt = 1;
    let diffCnt = 0;
    let result = 0;
    let tmp = s[0];
    
    if(s.length === 1) return 1;
    
    for(let i =1;i<s.length;i++){
        if(tmp === s[i]) cnt++;
        else diffCnt++;
        if(cnt === diffCnt){
            result++;
            tmp = s[i+1];
            diffCnt =0;
            cnt = 0;
        }
        else if(i+1 === s.length) result++;
    }
    return result;
}

// s	result
// "banana"	3
// "abracadabra" 6
// "aaabbaccccabba"	3