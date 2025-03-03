function solution(order) {
    let truck = 0;
    let mainIndex = 1;
    const stack = [];

    for(const target of order){
        while (mainIndex <= target) {
            stack.push(mainIndex++);
        }
        if (stack[stack.length-1] !== target) break;
        truck++;
        stack.pop();
    }
    return truck;
}

// order	result
// [4, 3, 1, 2, 5]	2
// [5, 4, 3, 2, 1]	5
