function solution(today, terms, privacies) {
    const answer = [];
    
    // 날짜 파싱 함수
    function parseDate(dateString) {
        const [year, month, day] = dateString.split('.').map(Number);
        return new Date(year, month - 1, day);
    }
    
    // 오늘 날짜 파싱
    const todayDate = parseDate(today);
    
    // 약관 종류와 만료 기간 매핑
    const alphaMonth = {};
    terms.forEach(term => {
        const [type, duration] = term.split(" ");
        alphaMonth[type] = Number(duration);
    });
    
    // 개인정보 만료 확인
    privacies.forEach((privacy, index) => {
        const [startDateStr, type] = privacy.split(' ');
        const startDate = parseDate(startDateStr);
        const duration = alphaMonth[type];

        // 만료일 계산
        const expiryDate = new Date(startDate);
        expiryDate.setMonth(expiryDate.getMonth() + duration);
        
        // 만료 여부 확인
        if (expiryDate <= todayDate) {
            answer.push(index + 1);  // 인덱스는 1부터 시작하므로 +1
        }
    });

    return answer;
}

// today	terms	privacies	result
// "2022.05.19"	["A 6", "B 12", "C 3"]	["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]	[1, 3]
// "2020.01.01"	["Z 3", "D 5"]	["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]	[1, 4, 5]


//다른풀이
function solution(today, terms, privacies) {
    var answer = [];
    var [year, month, date] = today.split(".").map(Number);
    var todates = year * 12 * 28 + month * 28 + date;
    var t = {};
    terms.forEach((e) => {
      let [a, b] = e.split(" ");
      t[a] = Number(b);
    });
    privacies.forEach((e, i) => {
      var [day, term] = e.split(" ");
      day = day.split(".").map(Number);
      var dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
      if (dates <= todates) answer.push(i + 1);
    });
    return answer;
  }