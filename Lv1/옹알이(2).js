function solution(babbling) {
    const speak = ['aya', 'ye', 'woo', 'ma'];
    let cnt = 0;

    for (let str of babbling) {
        let prev = ''; // 이전에 제거한 단어 저장
        let isValid = true;

        // 문자열이 남아 있는 동안 반복
        while (isValid) {
            isValid = false; // 초기화
            for (let word of speak) {
                // 현재 문자열의 시작 부분에 word가 있고, 이전에 제거한 단어와 같지 않으면
                if (str.startsWith(word) && prev !== word) {
                    str = str.slice(word.length); // 단어 제거
                    console.log(str);
                    prev = word; // 이전 단어 업데이트
                    isValid = true; // 단어가 제거되었으므로 true로 설정
                    break; // 다음 루프 실행
                }
            }
        }

        // 최종적으로 빈 문자열이 남았는지 확인
        if (str.length === 0) {
            cnt++;
        }
    }

    return cnt;
}

// babbling	result
// ["aya", "yee", "u", "maa"]	1
// ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	2


//다른 풀이
function solution(babbling) {
    const regexp1 = /(aya|ye|woo|ma)\1+/;
    const regexp2 = /^(aya|ye|woo|ma)+$/;
  
    return babbling.reduce((ans, word) => (
      !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
    ), 0);
  }
  