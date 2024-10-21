function solution(s) {
    let cntZero = 0;
    let cnt = 0;
    while(s!== "1"){
        cnt++;
        cntZero += [...s].filter(e=> e=== "0").length;
        let tmp = s.split("0").join("");
        s = tmp.length.toString(2);
    }
    return [cnt,cntZero];
}

// s	result
// "110010101001"	[3,8]
// "01110"	[3,3]
// "1111111"	[4,1]