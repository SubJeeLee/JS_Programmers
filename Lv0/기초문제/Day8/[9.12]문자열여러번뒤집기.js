function solution(my_string, queries) {
    let arr = my_string.split('');
    
    queries.forEach(([a, b]) => {
       let reversedPart = arr.slice(a, b + 1).reverse();
        arr.splice(a, b - a + 1, ...reversedPart); // 해당 위치에 뒤집힌 배열 삽입
    });

    return arr.join('');
}

console.log(solution('rermgorpsam', [[2, 3], [0, 7], [5, 9], [6, 10]]));