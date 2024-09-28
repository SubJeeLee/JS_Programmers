function solution(num_list) {
    return num_list.length >= 11 ? num_list.reduce((a,b) => a+b) : num_list.reduce((a,b) => a*b);
}


//다른 풀이
const solution=n=>n.reduce((a,v)=>n.length>10?a+v:a*v);