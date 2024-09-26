function solution(date1, date2) {
    if(date1[0] < date2[0]) return 1;
    else if(date1[0] === date2[0] && date1[1] < date2[1]) return 1;
    else if(date1[0] === date2[0] && date1[1] === date2[1] && date1[2] < date2[2]) return 1;
    else return 0;
} 


//다른 풀이
const solution = (date1, date2) => new Date(date1) < new Date(date2) ? 1 : 0