function solution(hp) {
    let A = 5;
    let B = 3;
    let C = 1;
    return Math.floor(hp/A) + Math.floor((hp%A)/B) + ((hp%A)%B)/C
}