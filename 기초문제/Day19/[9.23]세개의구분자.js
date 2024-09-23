function solution(myStr) {
    let answer = myStr.split(/[abc]/).filter(v=>v!=='');
    return answer.length === 0 ? ["EMPTY"] : answer;
}


//다른 풀이
const solution=s=>s.match(/[^a-c]+/g)||['EMPTY']