function solution(sizes) {
    let arr = sizes.map(size => size[0] > size[1] ? [size[0], size[1]] : [size[1], size[0]]);

    const width = [];
    const height = [];

    for (let i = 0; i < arr.length; i++) {
        width.push(arr[i][0]);
        height.push(arr[i][1]);
    }

    return Math.max(...width) * Math.max(...height);
}

//명함 번호	가로 길이	세로 길이
//1	60	50
//2	30	70
//3	60	30
//4	80	40