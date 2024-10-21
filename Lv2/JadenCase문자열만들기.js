function solution(s) {
    let answer = [];
    let arr = s.split(" ");
    arr.map(e => {
        let tmp ="";
        if(/^[a-z]+$/.test(e[0])){
            tmp += e.slice(0,1).toUpperCase() + e.slice(1,e.length).toLowerCase();
            answer.push(tmp);
        }
        else{
            tmp += e.slice(0,1) + e.slice(1,e.length).toLowerCase();
            answer.push(tmp);
        }
            
    });
    return answer.join(" ");
}

// s	return
// "3people unFollowed me"	"3people Unfollowed Me"
// "for the last week"	"For The Last Week"

function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}