function solution(n, arr1, arr2) {
    let map1 = [];
    let map2 = [];

    arr1.forEach(e => {
        let tmp = e.toString(2);
        tmp = tmp.padStart(n, '0');
        map1.push(tmp);
    });

    arr2.forEach(e => {
        let tmp = e.toString(2);
        tmp = tmp.padStart(n, '0');
        map2.push(tmp);
    });

    let answer = [];

    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            if (map1[i][j] === '0' && map2[i][j] === '0') {
                row += ' ';
            } else {
                row += '#';
            }
        }
        answer.push(row);
    }
    return answer;
}

// n	5
// arr1	[9, 20, 28, 18, 11]
// arr2	[30, 1, 21, 17, 28]
// 출력	["#####","# # #", "### #", "# ##", "#####"]


//다른 풀이
function solution(n, arr1, arr2) {
    let answer = [];
    
    for (let i = 0; i < n; i++) {
        // 두 배열의 값을 비트 OR로 결합
        let combined = arr1[i] | arr2[i];
        // 결합된 값을 이진수로 변환하고 패딩
        let binaryString = combined.toString(2).padStart(n, '0');
        
        // '1'을 '#'으로, '0'을 ' '으로 대체
        let row = binaryString.replace(/0/g, ' ').replace(/1/g, '#');
        
        // 최종 결과에 추가
        answer.push(row);
    }
    
    return answer; // 문자열 배열을 반환
}