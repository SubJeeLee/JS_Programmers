function solution(n, lost, reserve) {
    let result = n;
    let tmp = lost.filter(e => reserve.includes(e));
    if(tmp){
        lost = lost.filter(e=>!tmp.includes(e));
        reserve = reserve.filter(e=>!tmp.includes(e));
    }
    reserve = reserve.sort((a,b) => a-b);
    lost = lost.sort((a,b) => a-b);
    
    for(let num of lost){
        if(reserve.includes(num-1)) reserve = reserve.filter(e=> e !== num-1);
        else if(reserve.includes(num+1)) reserve = reserve.filter(e=> e !== num+1); 
        else result--;
    }
    return result;
} 


// n	lost	reserve	return
// 5	[2, 4]	[1, 3, 5]	5
// 5	[2, 4]	[3]	4
// 3	[3]	[1]	2

//다른풀이
function solution(n, lost, reserve) {      
    return n - lost.filter(a => {
        const b = reserve.find(r => Math.abs(r-a) <= 1)
        if(!b) return true
        reserve = reserve.filter(r => r !== b)
    }).length
}