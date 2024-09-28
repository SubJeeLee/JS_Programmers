function solution(my_string, m, c) {
    let answer = [];
    for(let i =0;i<my_string.length;i+=m){
        answer.push(my_string.slice(i, i + m).split('')[c-1]);
    }
    return answer.join('');
}

console.log(solution("ihrhbakrfpndopljhygc",4,2));

//다른 풀이
function solution(my_string, m, c) {
    return [...my_string].filter((_, i) => i % m === c - 1).join('');
}