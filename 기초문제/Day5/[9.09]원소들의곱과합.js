function solution(num_list) {
    return num_list.reduce((a,b) => a*b) < (num_list.reduce((a,b) => a+b))**2 ? 1 : 0;
}

console.log(solution([3,4,5,2,1]));