function solution(my_string) {
    let result = [];
    my_string.split('').map(a => {
        if(a === a.toUpperCase()) result.push(a.toLowerCase());
        else result.push(a.toUpperCase());
    });
    return result.join('');
}

console.log(solution("abCdEfghIJ"));


//잘 푼 풀이
function solution(my_string) {
    return my_string.split('').map(n => n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()).join('')
}