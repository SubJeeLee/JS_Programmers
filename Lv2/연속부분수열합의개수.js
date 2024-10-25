function solution(elements) {
    let answer = [];
    let arr = [...elements,...elements];
    for(let i =0;i<elements.length;i++){
        for(let j = 0; j<elements.length;j++){
            let tmp = arr.slice(j,i+1+j);
            answer.push(tmp.reduce((a,b) => a+b));
        }
    }
    
    let result = new Set(answer);
    return result.size;
}

// elements	result
// [7,9,1,1,4]	18

//다른 풀이
function solution(elements) {
    const circular = elements.concat(elements);
    const set = new Set();
    for (let i = 0; i < elements.length; i++) {
        let sum = 0;
        for (let j = 0; j < elements.length; j++) {
            sum += circular[i + j];
            set.add(sum);
        }
    }
    return set.size;
}