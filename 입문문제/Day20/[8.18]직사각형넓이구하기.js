function solution(dots) {   
    let xValue = dots.map(p=>p[0]);
    let yValue = dots.map(p=>p[1]);
    
    let width = Math.max(...xValue) - Math.min(...xValue);
    let height = Math.max(...yValue) - Math.min(...yValue);

    return width * height;
}

console.log(solution([[-1, -1], [1, 1], [1, -1], [-1, 1]]));