function solution(s){
    let tmp = {};
    let result =[];

    [...s].forEach((e,i) => {
        if(!tmp[e]){
            tmp[e] = {indices: []};
            result.push(-1);
            tmp[e].indices.push(i);
        }
        else{
            result.push(i-tmp[e].indices.shift());
            tmp[e].indices.push(i);
        }
    });
    return result;
}

// s	result
// "banana"	[-1, -1, -1, 2, 2, 2]
// "foobar"	[-1, -1, 1, -1, -1, -1]


//다른 풀이
function solution(s) {
    const hash={};

    return [...s].map((v,i)=>{
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i;
        return result;
    });
}
