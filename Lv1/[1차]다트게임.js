function solution(dartResult) {
    let sumArr = [];
    let score = 0;
    for(let i =0;i<dartResult.length;i++){
        if(dartResult[i] === "*"){
            sumArr[sumArr.length-1] *= 2;
            if(sumArr[sumArr.length-2]) sumArr[sumArr.length-2] *= 2;
        }
        else if(dartResult[i] === "#"){
            sumArr[sumArr.length-1] *= -1;
        }
        else if(isNaN(Number(dartResult[i]))){
            score = Number(dartResult[i-1]);
            if(!(isNaN(Number(dartResult[i-2])))){
                score = 10;
            }
            if(dartResult[i] === "S") score = Math.pow(score,1);
            else if(dartResult[i] === "D") score = Math.pow(score,2);
            else score = Math.pow(score,3);
            
            sumArr.push(score);
        }   
    }
    console.log(sumArr);
    return sumArr.reduce((a,b) => +a + +b);
}

//테스트 케이스는 => https://school.programmers.co.kr/learn/courses/30/lessons/17682#


//다른 풀이
function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
          options = { '*': 2, '#': -1, undefined: 1 };

    let darts = dartResult.match(/\d.?\D/g);

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}
