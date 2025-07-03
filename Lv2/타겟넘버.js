function solution(numbers, target) {
    let count = 0;
    
    function dfs(idx, currentSum){
        if(idx == numbers.length){
            if(currentSum == target){
                count++;
            } 
            return;
        }
        dfs(idx + 1, currentSum + numbers[idx]);
        dfs(idx + 1, currentSum - numbers[idx]);
    }
    
    dfs(0, 0)
    return count;
}


// numbers	target	return
// [1, 1, 1, 1, 1]	3	5
// [4, 1, 2, 1]	4	2
