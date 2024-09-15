function solution(start_num, end_num) {
    return Array.from({length:(start_num-end_num)+1},(_,index) => index+end_num).reverse();
}

//다른 풀이
const solution = (start, end) => Array(start-end+1).fill(start).map((v,i)=>v-i);