function solution(myString, pat) {
    const answer =[]
    for(i=0; i<myString.length; i++){
        answer.push(myString.slice(i,i+pat.length))
    }
    return answer.filter(v=> v===pat).length
    
}

console.log(solution("banana","ana"));



//다른 풀이
function solution(myString, pat) {
    const reg = new RegExp(`(?=${pat})`, "g")
    return myString.match(reg)?.length || 0;
}