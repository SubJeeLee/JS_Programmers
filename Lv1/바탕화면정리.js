function solution(wallpaper) {
    let X = [];
    let Y = [];
    wallpaper.forEach((e,index) => {
        for(let i =0;i<e.length;i++){
            if(e[i] === "#"){
                X.push(index);
                Y.push(i);
            } 
        }
    })
    return [Math.min(...X), Math.min(...Y), Math.max(...X) +1, Math.max(...Y) +1];
}

// wallpaper	result
// [".#...", "..#..", "...#."]	[0, 1, 3, 4]
// ["..........", ".....#....", "......##..", "...##.....", "....#....."]	[1, 3, 5, 8]
// [".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."]	[0, 0, 7, 9]
// ["..", "#."]	[1, 0, 2, 1]