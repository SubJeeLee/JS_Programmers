function solution(nums) {
    let cnt = 0;
    function primeNumber(num){
        for(let i = 2; i<= Math.sqrt(num);i++){
            if(num % i === 0) return false;
        }
        return true;
    }
    for(let i =0;i<nums.length-2;i++){
        for(let j =i+1;j<nums.length-1;j++){
            for(let k = j+1;k<nums.length;k++){
                if(primeNumber(nums[i] + nums[j] + nums[k])) cnt++;
            }
        }
    }
    return cnt;
}

// nums	result
// [1,2,3,4]	1
// [1,2,7,6,4]	4