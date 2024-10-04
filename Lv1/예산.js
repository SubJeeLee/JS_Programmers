function solution(d, budget) {
    let sortedArr = d.sort((a,b)=> a-b);
    let sum = 0;
    for(let i=0; i<sortedArr.length;i++){
        sum+=sortedArr[i];
        if(sum>budget) return i;
    }
    return d.length;
}