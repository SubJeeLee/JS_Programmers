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