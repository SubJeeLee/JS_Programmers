function solution(lottos, win_nums) {
    const score = {
        '0' : 6,
        '1' : 6,
        '2' : 5,
        '3' : 4,
        '4' : 3,
        '5' : 2,
        '6' : 1,
    };
    
    let cnt = 0;
    let zerocnt = 0;
    lottos.forEach(e => {
        if(e === 0) zerocnt++;
        if(win_nums.includes(e)){
            cnt++;
        }
    });
        console.log(cnt,zerocnt);
    return [score[cnt+zerocnt],score[cnt]];

}

// lottos	win_nums	result
// [44, 1, 0, 0, 31, 25]	[31, 10, 45, 1, 6, 19]	[3, 5]
// [0, 0, 0, 0, 0, 0]	[38, 19, 20, 40, 15, 25]	[1, 6]
// [45, 4, 35, 20, 3, 9]	[20, 9, 3, 45, 4, 35]	[1, 1]

//다른 풀이
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}