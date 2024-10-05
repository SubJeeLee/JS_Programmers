function solution(s) {
    let answer =''
    let arr = s.split(' ');
    for(let i =0;i<arr.length;i++){
        answer += [...arr[i]].map((e,i) => i%2===0 ? e.toUpperCase() : e.toLowerCase()).join('')
        if(i <arr.length-1) answer+=' ';
    }
    return answer;
}

// s	return
// "try hello world"	"TrY HeLlO WoRlD"


//다른풀이
function toWeirdCase(s){
    //함수를 완성해주세요
    return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
  
  }