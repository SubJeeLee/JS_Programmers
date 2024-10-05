function solution(t, p) {
    let cnt =0;
    const l = p.length;
    for(let i =0;i<=t.length-l;i++){
        if(+t.slice(i,i+l) <= +p) cnt++;
    }
    return cnt;
}

// t	p	result
// "3141592"	"271"	2
// "500220839878"	"7"	8
// "10203"	"15"	3