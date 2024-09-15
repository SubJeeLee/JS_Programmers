function solution(my_string) {
    const Ualphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const Lalphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
    let A = Ualphabet.concat(Lalphabet);
    const letterCount = {};
    A.forEach(letter => {
        letterCount[letter] = 0;
    });
    my_string.split('').forEach(char => letterCount[char]++);

    return Object.values(letterCount);
}

console.log(solution("Programmers"))

//다른 풀이
function solution(m) {
    var answer = [];
    let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let a = [];
    a.length = 52;
    a.fill(0);

    m.split("").map((n)=>{
        a[al.indexOf(n)]+=1
    })

    return a;
}
