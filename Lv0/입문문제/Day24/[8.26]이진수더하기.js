// function solution(bin1, bin2) {
//     return (parseInt(bin1,2) + parseInt(bin2,2)).toString(2);
// }

console.log(solution('10','1110'));


//다른 풀이
function solution(bin1, bin2) {
    let temp = Number(bin1) + Number(bin2);
    temp = [...temp.toString()].reverse().map((v) => +v);
    
    for (let i = temp.length; i < 11; i++) {
      temp.push(0);
    }
    
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === 2) {
        temp[i] = 0;
        temp[i + 1]++;
      } else if (temp[i] === 3) {
        temp[i] = 1;
        temp[i + 1]++;
      }
    }

    return Number(temp.reverse().join("")).toString();
  }