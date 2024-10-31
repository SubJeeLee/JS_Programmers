function solution(citations) {
    const arr = citations.sort((a, b) => b - a);
    let hIndex = 0;
    
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i],hIndex);
        if (arr[i] >= i + 1) {
            hIndex = i + 1; 
        } else {
            break;
        }
    }
    
    return hIndex;
}

// citations	return
// [3, 0, 6, 1, 5]	3