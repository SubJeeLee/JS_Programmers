function solution(players, callings) {
    const position = {};  // 선수의 현재 인덱스를 기록할 객체
    players.forEach((player, index) => {
        position[player] = index;  // 초기 인덱스 설정
    });

    callings.forEach(calling => {
        const index = position[calling]; // 호출된 선수의 현재 인덱스
        //console.log(position,index);
        if (index > 0) { // 첫 번째 인덱스가 아닐 경우
            const previousPlayer = players[index - 1];

            // 선수 위치 업데이트
            position[calling]--; // 호출된 선수의 인덱스 감소
            position[previousPlayer]++; // 이전 선수의 인덱스 증가

            // 배열에서 위치 교환
            [players[index], players[index - 1]] = [players[index - 1], players[index]];
        }
    });

    return players;
}

// players	callings	result
// ["mumu", "soe", "poe", "kai", "mine"] ["kai", "kai", "mine", "mine"]	["mumu", "kai", "mine", "soe", "poe"]