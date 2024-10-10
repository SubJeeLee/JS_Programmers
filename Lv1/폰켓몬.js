function solution(nums) {
    let answer = 0;
    
    let arrSet = [...new Set(nums)];
    let limit = nums.length / 2;
    
    return arrSet.length > limit ? limit : arrSet.length;
}


// nums	result
// [3,1,2,3]	2
// [3,3,3,2,2,4]	3
// [3,3,3,2,2,2]	2


//해시 풀이
function solution(nums) {
    let answer = 0;
    const select = nums.length/2;
    const check = nums.reduce((total,cur) => {
        total[cur] ? total[cur]++ : total[cur] = 1;
        return total;
    },{});
    const checkLeng = Object.keys(check).length;
    return checkLeng > select ? select : checkLeng;
}