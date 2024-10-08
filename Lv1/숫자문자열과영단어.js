function solution(s){
    const arr = {
        "zero" :0,
	   "one": 1,
	    "two": 2,
	    "three": 3,
	    "four": 4,
	    "five": 5,
	    "six": 6,
	   "seven": 7,
	    "eight": 8,
	    "nine": 9,
    };
    const numberWords = Object.keys(arr);
    let result = '';
    let tmp = '';

    for(let i =0; i<s.length; i++){
        tmp += s[i];
        if(numberWords.includes(tmp)){
            result += arr[tmp];
            tmp = '';
        }
        else if(!isNaN(Number(tmp))){
            result += tmp;
            tmp = '';
        }
    }
    return Number(result);
}

// s	result
// "one4seveneight"	1478
// "23four5six7"	234567
// "2three45sixseven"	234567
// "123"	123


//다른 풀이
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}