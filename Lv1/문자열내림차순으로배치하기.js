function solution(s) {
    let big = [...s].filter(char => char >= 'A' && char <= 'Z');
    let small = [...s].filter(char => char >= 'a' && char <= 'z');
    return small.sort((a,b) => b.localeCompare(a)).join('') + big.sort((a,b) => b.localeCompare(a)).join('')
}