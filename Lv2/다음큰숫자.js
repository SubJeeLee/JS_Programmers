function solution(n) {
    let check = false;
    const n2 = n.toString(2);
    const L2 = [...n2].filter(e => e === "1").length;
    
    while(!check){
        n++;
        let a = n.toString(2);
        if([...a].filter(e=> e==="1").length === L2) check = true;
    }
    return n
}

// n	result
// 78	83
// 15	23