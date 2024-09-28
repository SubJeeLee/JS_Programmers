function solution(num_list) {
    let odd = '';
    let even = '';
    num_list.forEach(element => {
        if(element % 2 === 0) even += element;
        else odd += element;
    }); 
    return Number(odd) + Number(even);
}

console.log(solution([3,4,5,2,1]));