function solution(arr){
    let answer = [arr[0],];
     let j = 0;
     for(let i =0; i<arr.length;i++){
         if(arr[i] !== answer[j]){
             j++;
             answer.push(arr[i]);
         }
     }
     return answer;
 }

 //다른 풀이
 function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}