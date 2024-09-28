function solution(n, control) {
    const keypoint = {
        'w': 1,
        's': -1,
        'd': 10,
        'a': -10
    };

    let answer = [...control].reduce((acc,char) =>{
        return acc + (keypoint[char] || 0);
    },n);
    return answer;
}

console.log(solution(0,"wsdawsdassw"));