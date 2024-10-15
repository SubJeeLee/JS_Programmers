function solution(numbers, hand) {
    let positions = { L: [3, 0], R: [3, 2] }; // L: "*", R: "#"
    let answer = [];
    const pad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]];
    const quickPad = {
        "1": "L",
        "4": "L",
        "7": "L",
        "3": "R",
        "6": "R",
        "9": "R",
    };

    numbers.forEach(e => {
        if (e in quickPad) {
            answer.push(quickPad[e]);
            positions[quickPad[e]] = findPosition(e, pad); // 현재 손 위치 업데이트
        } else {
            let curr = findPosition(e, pad);
            let positionL = positions.L;
            let positionR = positions.R;

            let Lsum = Math.abs(curr[0] - positionL[0]) + Math.abs(curr[1] - positionL[1]);
            let Rsum = Math.abs(curr[0] - positionR[0]) + Math.abs(curr[1] - positionR[1]);
            
            if (Lsum === Rsum) {
                let tmp = hand === "left" ? "L" : "R";
                answer.push(tmp);
                positions[tmp] = curr; // 해당 손 위치 업데이트
            } else if (Lsum > Rsum) {
                answer.push("R");
                positions.R = curr; // 오른손 위치 업데이트
            } else {
                answer.push("L");
                positions.L = curr; // 왼손 위치 업데이트
            }
        }
    });

    return answer.join('');
}


function findPosition(num, pad) {
    for (let i = 0; i < pad.length; i++) {
        for (let j = 0; j < pad[i].length; j++) {
            if (pad[i][j] === num) {
                return [i, j];
            }
        }
    }
    return null; 
}

// numbers	hand	result
// [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
// [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"	"LLRLLRLLRL"