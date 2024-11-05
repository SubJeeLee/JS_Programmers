function solution(progresses, speeds) {
  let arr = progresses.map((e,i) => Math.ceil((100 - e)/speeds[i]));
  let answer = [];
  console.log(arr);
  
  let key = arr[0];
  let cnt = 0;
  arr.forEach(e => {
      if(e > key){
          answer.push(cnt);
          key = e;
          cnt = 1;
      }
      else{
          cnt++;
      }
  })
  answer.push(cnt);
  return answer;
}

// progresses	speeds	return
// [93, 30, 55]	[1, 30, 5]	[2, 1]
// [95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]


//다른풀이
function solution(progresses, speeds) {
  let answer = []

for(let i=0;i<progresses.length;i++){
 progresses[i]=Math.ceil((100-progresses[i])/speeds[i])
  if(i!=0&&progresses[i-1]>progresses[i])
     progresses[i]=progresses[i-1]
 }

let i=0
while(progresses.length){
 answer.push([...progresses].filter(v=>v==progresses[i]).length)
 progresses=progresses.filter(v=>v!==progresses[i])
}

  return answer
}