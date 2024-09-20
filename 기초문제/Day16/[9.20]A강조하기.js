function solution(myString) {
    return [...myString].map((e) => e === 'a' ? e.toUpperCase() : e >= 'B' && e <= 'Z' ? e.toLowerCase() : e).join('');
}

console.log(solution("PrOgRaMmErS"));


//다른풀이
const solution=s=>s.toLowerCase().replaceAll('a','A');