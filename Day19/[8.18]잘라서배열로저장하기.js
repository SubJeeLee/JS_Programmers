function solution(my_str, n) {
    let answer = [];
    let arr = my_str.split('');
    for(let i = 0;i<arr.length;i+= n) answer.push(arr.slice(i,n+i).join(''));
    return answer;
}

console.log(solution("abc1Addfggg4556b",6));

//다른 풀이
//slice 는 문자열에서도 된다 굳이 split으로 쪼개서 배열을 안만들어도 된다
function solution(my_str, n) {
    let res = [];
    for (let i = 0; i < my_str.length; i+=n) res.push(my_str.slice(i, i+n));
    return res;
}

//잘 푼 풀이
//정규 표현식
function solution(my_str, n) {
    return my_str.match(new RegExp(`.{1,${n}}`, "g"));
  }