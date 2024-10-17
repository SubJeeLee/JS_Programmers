function solution(park, routes) {
    let W = park.length;
    let H = park[0].length;
    let curr = [];
    
    // "S"의 위치 찾기
    park.forEach((e, index) => {
        for (let i = 0; i < e.length; i++) {
            if (e[i] === "S") curr = [index, i]; // curr을 배열로 초기화
        }
    });

    function check1(row, col) {
        return row < W && col < H && row >= 0 && col >= 0; // 유효한 인덱스 검사
    }
    
    for (let i = 0; i < routes.length; i++) {
        let [direc, dist] = routes[i].split(" ");
        dist = Number(dist);
        let validMove = true;

        for (let j = 1; j <= dist; j++) {
            let newRow = curr[0];
            let newCol = curr[1];

            // 방향에 따라 새로운 인덱스 계산
            if (direc === "E") newCol += j;
            else if (direc === "W") newCol -= j;
            else if (direc === "S") newRow += j;
            else if (direc === "N") newRow -= j;

            // 유효한 인덱스인지 확인
            if (!check1(newRow, newCol) || park[newRow][newCol] === "X") {
                validMove = false; // 유효하지 않으면 이동 불가
                break; // 장애물 또는 경계에서 종료
            }
        }

        // 유효한 이동인 경우에만 curr 업데이트
        if (validMove) {
            if (direc === "E") curr[1] += dist;
            else if (direc === "W") curr[1] -= dist;
            else if (direc === "S") curr[0] += dist;
            else if (direc === "N") curr[0] -= dist;
        }
    }

    return curr;
}

// park	routes	result
// ["SOO","OOO","OOO"]	["E 2","S 2","W 1"]	[2,1]
// ["SOO","OXX","OOO"]	["E 2","S 2","W 1"]	[0,1]
// ["OSO","OOO","OXO","OOO"]	["E 2","S 3","W 1"]	[0,0]