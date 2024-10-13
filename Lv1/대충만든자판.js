function solution(keymap, targets) {
    let answer = [];
    let alphaMap = {};

    for (let arr of keymap) {
        for (let i = 0; i < arr.length; i++) {
            if (alphaMap[arr[i]] === undefined || alphaMap[arr[i]] > i + 1) {
                alphaMap[arr[i]] = i + 1;
            }
        }
    }

    for (let arr of targets) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (alphaMap[arr[i]] === undefined) {
                answer.push('no');
                break;
            } else {
                sum += alphaMap[arr[i]];
            }
        }
        if(answer[answer.length-1] === 'no')
            answer[answer.length-1] = -1;
        else
            answer.push(sum);
    }

    return answer;
}

// keymap	targets	result
// ["ABACD", "BCEFD"]	["ABCD","AABB"]	[9, 4]
// ["AA"]	["B"]	[-1]
// ["AGZ", "BSSS"]	["ASA","BGZ"]	[4, 6]

// 입력값 〉	["ABCDE"], ["FGHIJ"]
// 기댓값 〉	[-1]

//다른풀이
function solution(keymap, targets) {
    const answer = [];
    const map = {}
    for (const items of keymap) {
        items.split('').map((item, index) => map[item] = (map[item] < index+1 ? map[item] : index+1))
    }
    for (const items of targets) {
        answer.push(items.split('').reduce((cur, item) => cur += map[item], 0) || -1)
    }
    return answer;
}
