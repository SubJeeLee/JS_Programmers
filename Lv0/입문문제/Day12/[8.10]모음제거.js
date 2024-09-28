function solution(my_string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    const result = Array.from(my_string)
        .filter(char => !vowels.includes(char)) // 모음이 아닌 문자만 필터링
        .join(''); // 배열을 문자열로 결합
    
    return result;
}

console.log(solution("hello world")); // "hll wrld"

//잘푼 풀이
function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}