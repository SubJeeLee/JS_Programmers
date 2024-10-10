function solution(a, b) {
    const date = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const answer = new Date(2016,a-1,b);
    return date[answer.getDay()];
}


// a	b	result
// 5	24	"TUE"

//다른 풀이
function solution(a, b) {
    const monthDay = [31,29,31,30,31,30,31,31,30,31,30,31]
    const weekDay = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]

    let days = b
    for(let i=0 ; i<a-1 ; i++)
        days += monthDay[i];

    return weekDay[days%7];
}