function solution(str_list, ex) {
    let arr = str_list.filter(e=> !e.includes(ex));
    return arr.length === 0 ? "" : arr.reduce((a,b)=> a+b);
}