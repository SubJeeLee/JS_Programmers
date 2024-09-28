function solution(my_strings, parts) {
    return my_strings.map((str, index) => {
        const [a, b] = parts[index];
        return str.slice(a, b + 1);  // a부터 b까지 자르기
    }).join('');  // 최종적으로 문자열을 합침
}

console.log(solution(["progressive", "hamburger", "hammer", "ahocorasick"], [[0, 4], [1, 2], [3, 5], [7, 7]]));


//다른 풀이
function solution(my_strings, parts) {
    return parts.map(([s, e], i) => {
        return my_strings[i].slice(s, e + 1)
    }).join('')
}