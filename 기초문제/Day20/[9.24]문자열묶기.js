function solution(strArr) {
    const result = {};
    strArr.map(x => x.length).forEach((x) => { 
        result[x] = (result[x] || 0)+1; 
    });
    return Math.max(...Object.values(result));
}