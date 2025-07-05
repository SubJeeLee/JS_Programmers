function solution(name) {
    let upDownMoves = 0;
    for (let i = 0; i < name.length; i++) {
        const charCode = name.charCodeAt(i);
        const movesUp = charCode - 'A'.charCodeAt(0);
        const movesDown = 'Z'.charCodeAt(0) - charCode + 1;
        upDownMoves += Math.min(movesUp, movesDown);
    }
    
    let leftRightMoves = name.length - 1; 

    for (let i = 0; i < name.length; i++) {
        let nextIndex = i + 1;
        while (nextIndex < name.length && name[nextIndex] === 'A') {
            nextIndex++;
        }
        const moveToRightThenLeft = i + i + (name.length - nextIndex);
        const moveToLeftThenRight = (name.length - nextIndex) * 2 + i;
        
        leftRightMoves = Math.min(leftRightMoves, moveToRightThenLeft, moveToLeftThenRight);
    }
    
    return upDownMoves + leftRightMoves;
}

// name	return
// "JEROEN"	56
// "JAN"	23
