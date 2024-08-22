function solution(spell, dic) {
    let answer = [];
    for(let i = 0;i<dic.length;i++){
        let count = 0;
        for(let j = 0;j<spell.length;j++){
            if(dic[i].includes(spell[j])) count += 1;
        }
        if(count === spell.length) answer.push(1);
    }
    return answer.length > 0 ? 1 : 2;
}

console.log(solution(["p", "o", "s"],["sod", "eocd", "qixm", "adio", "soo"]));
console.log(solution(["z", "d", "x"],["def", "dww", "dzx", "loveaw"]));
console.log(solution(["s", "o", "m", "d"],["moos", "dzx", "smm", "sunmmo", "som"]));



//잘 푼 풀이
function solution(spell, dic) {
    return dic.filter(v=>spell.every(c=>v.includes(c))).length ? 1 : 2;
}

function solution(p, d) {
    return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}