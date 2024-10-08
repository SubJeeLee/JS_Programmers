function solution(numbers) {
    let tmp = [];
    for(let i =0;i<numbers.length-1;i++){
        for(let j =1; j<numbers.length; j++){
            if(i !== j) tmp.push(numbers[i] + numbers[j]);
        }
    }
    let answer = new Set(tmp);
    return Array.from(answer).sort((a,b)=> a-b);
}

// numbers	result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]