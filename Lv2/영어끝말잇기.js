function solution(n, words) {
    let result =[];
    let arr =[words[0],];
    
    for(let i = 1;i<words.length; i++){
        let L = arr[arr.length-1].length
        if(words[i][0] !== arr[arr.length-1][L-1] || arr.includes(words[i])){
            result.push((i%n)+1,parseInt(i/n)+1);
            break;
        }
        arr.push(words[i]);
}
   return result.length === 0 ? [0,0] : result;
}

// n	words	result
// 3	["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]	[3,3]
// 5	["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]	[0,0]
// 2	["hello", "one", "even", "never", "now", "world", "draw"]	[1,3]