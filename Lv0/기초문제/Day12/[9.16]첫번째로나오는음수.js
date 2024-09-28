function solution(num_list) {
    let a = num_list.filter(c=> {if(c<0) return c});
    console.log(a);
    return num_list.indexOf(a[0])
}


console.log(solution([13, 22, 53, 24, 15, 6]));

//다른 풀이
const solution = num_list => num_list.findIndex(v => v < 0)
//원소가 존재하지않을때 자동적으로 -1을 return한다.