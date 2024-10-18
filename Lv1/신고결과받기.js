function solution(id_list, report, k) {
    let userId = {};
    let countId = {};
    let result = new Array(id_list.length).fill(0);

    id_list.forEach(name => {
        userId[name] = []; 
        countId[name] = 0;
    });

    // 신고 처리
    report.forEach(e => {
        let [reporter, subject] = e.split(" ");
        if (!userId[reporter].includes(subject)) {
            userId[reporter].push(subject);
            countId[subject] += 1;
        }
    });
    
    // 신고 횟수가 k 이상인 사용자 찾기
    id_list.forEach((id) => {
        if (countId[id] >= k) {
            // 신고한 사용자 목록을 통해 결과 업데이트
            for (const reporter of id_list) {
                if (userId[reporter].includes(id)) {
                    result[id_list.indexOf(reporter)] += 1;
                }
            }
        }
    });

    return result;
}

// id_list	report	k	result
// ["muzi", "frodo", "apeach", "neo"]	["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]	2	[2,1,1,0]
// ["con", "ryan"]	["ryan con", "ryan con", "ryan con", "ryan con"]	3	[0,0]