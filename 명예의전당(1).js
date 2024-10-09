function solution(k, score) {
    let result = [];
    let tmp =[];
    for(let i =0;i<score.length;i++){
        tmp[i] = score[i];
        let arr = tmp.sort((a,b) => b-a);
        if(i >= k) result.push(arr[k-1]);
        else result.push(arr[arr.length-1]);
    }
    return result;
}

// k	score	result
// 3	[10, 100, 20, 150, 1, 100, 200]	[10, 10, 10, 20, 20, 100, 100]
// 4	[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]	[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]