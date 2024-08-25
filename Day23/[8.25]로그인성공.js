function solution(id_pw, db) {
    let answer = [];
    for(let i =0;i<db.length;i++){
        if(id_pw[0] === db[i][0] && id_pw[1] === db[i][1]){
            answer.push('login');
            break;
        }
        else if(id_pw[0] === db[i][0]) answer.push('wrong pw');
    }
    return answer.length > 0 ? answer[0] : 'fail';
}

console.log(solution(["programmer01", "15789"], [["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]));

//다른 풀이
function solution(id_pw, db) {
    db = db.filter(v=>v[0]===id_pw[0]);
    if (!db.length) return 'fail';
    for (let d of db) if (d[1] === id_pw[1]) return 'login';
    return 'wrong pw';
}