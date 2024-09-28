function solution(num_list) {
    let odd = num_list.filter((_,i) => i%2===0).reduce ((a,b) => a+b);
    let even = num_list.filter((_,i) => i%2!==0).reduce ((a,b) => a+b);
    return odd > even ? odd : even;
}