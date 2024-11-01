function solution(clothes) {
    let type = {};
    let sum = [];
    clothes.forEach(e => type[e[1]] = (type[e[1]] || 0)+1);
    
    for(let num in type){
        sum.push(type[num] + 1);
    }
    return sum.reduce((a,b) => a*b) -1 
}

// clothes	return
// [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]	5
// [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]	3


//다른 풀이
function solution(clothes) {
    return Object.values(clothes.reduce((obj, t)=> {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
}