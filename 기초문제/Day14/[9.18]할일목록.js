function solution(todo_list, finished) {
    return finished.map((e,i) => (e===false ? i : -1)).filter(i => i!==-1).map(e => todo_list[e]);
}


//다른 풀이
function solution(todo_list, finished) {
    return todo_list.filter((_,i) => !finished[i]);
}