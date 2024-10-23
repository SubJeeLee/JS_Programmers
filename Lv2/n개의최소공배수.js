function solution(arr) {
    // 최대공약수 (GCD) 함수
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // 최소공배수 (LCM) 함수
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }
    let tmp = arr[0];
    for (let i = 1; i < arr.length; i++) {
        tmp = lcm(tmp, arr[i]);
    }
    return tmp;
}

// arr	result
// [2,6,8,14]	168
// [1,2,3]	6