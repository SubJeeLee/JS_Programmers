function solution(num_list) {
    let fIndexValue = num_list[num_list.length-1];
    let sIndexValue = num_list[num_list.length-2];
    fIndexValue > sIndexValue ? num_list.push(fIndexValue - sIndexValue) : num_list.push(fIndexValue*2);
    return num_list;
}


//다른 풀이
function solution(num_list) {
    const [a, b] = [...num_list].reverse();
    return [...num_list, a > b ? (a-b):a*2];
}