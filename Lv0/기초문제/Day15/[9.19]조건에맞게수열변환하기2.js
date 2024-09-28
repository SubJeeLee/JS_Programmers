function solution(arr) {
    function change(tmp){
        return tmp.map(v => v >=50 && v%2===0 ? v/2 : v < 50 && v%2==1 ? v*2+1 : v);
    }
    let i =0;
    let prev = arr;
    while(true){
        const check = change(prev);
        const isAllSame = prev.every((a, i) => a === check[i])
        if(isAllSame) break;
        i++;
        prev = check;
    }
    return i;
}

console.log(solution([1, 2, 3, 100, 99, 98]));