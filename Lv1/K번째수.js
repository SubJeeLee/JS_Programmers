function solution(array, commands){
    let answer =[];
    commands.map(([a,b,k]) => {
        let arr = array.slice(a-1,b).sort((a,b) => a-b);
        answer.push(arr[k-1]);
    });
    return answer;
}

//         array	                      commands	             return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]