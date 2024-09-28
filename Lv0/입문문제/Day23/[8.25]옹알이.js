function solution(babbling) {
    let count = 0;
    const arr = ['aya','ye','woo','ma'];
    for(let i =0;i<babbling.length;i++){
        for(let j =0;j<arr.length;j++){
            if(babbling[i].includes(arr[j])) 
                babbling[i] = babbling[i].replace(arr[j],'x');
        }
        babbling[i] = babbling[i].replace(/x/g,'');
        if(babbling[i].length === 0 ) count +=1;
    }
    return count;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));


//잘 푼 풀이
function solution(babbling) {
    var answer = 0;
    const regex = /^(aya|ye|woo|ma)+$/;
  
    babbling.forEach(word => {
      if (regex.test(word)) answer++;  
    })
  
    return answer;
  }

//정규 표현식을 열심히 공부하자..