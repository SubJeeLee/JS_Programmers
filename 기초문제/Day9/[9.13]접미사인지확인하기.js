function solution(my_string,is_suffix){
    let tmp =[];
    for(let i =0;i<my_string.length;i++){
        tmp.push(my_string.slice(i));
    }
    tmp.sort();
    return tmp.includes(is_suffix) ? 1 : 0;
}

console.log(solution("banana","ana"));

function solution(my_string, is_suffix) {
    return my_string.endsWith(is_suffix) ? 1 : 0;
}