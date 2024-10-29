function solution(want, number, discount) {
    let arr = {};
    let cnt = 0;
    let bool = true;
    want.forEach((e,i)=> arr[e] = number[i]);
    //console.log(arr);
    
    for(let i =0; i<discount.length; i++){
        let tmp = discount.slice(i,10+i);
        let check = {};
        bool = true;
        tmp.forEach(e => check[e] = (check[e] || 0)+1);
        for(let char in arr){
            if(!check[char] || check[char] < arr[char]){
                bool = false;
            }
        }
        if(bool) cnt++;
    }
    return cnt;
}

// want	number	discount	result
// ["banana", "apple", "rice", "pork", "pot"]	[3, 2, 2, 2, 1]	["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]	3
// ["apple"]	[10]	["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]


function solution(want, number, discount) {
    let count = 0;
    for (let i = 0; i < discount.length - 9; i++) { //discount.length - 9 10개보다 적게 남는 경우 제외(시간 절약을 할 수 있음)
        const slice = discount.slice(i, i+10);

        let flag = true;
        for (let j = 0; j < want.length; j++) {
            if (slice.filter(item => item === want[j]).length !== number[j]) {
                flag = false;
                break;
            }
        }
        if (flag) count += 1;
    }
    return count;
}