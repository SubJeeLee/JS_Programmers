function solution(arr1, arr2) {
    // 결과 행렬 초기화: arr1의 행 수와 arr2의 열 수
    let arr = Array.from({ length: arr1.length }, () => Array(arr2[0].length).fill(0));
    
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2[0].length; j++) {
            for (let k = 0; k < arr1[0].length; k++) {
                arr[i][j] += arr1[i][k] * arr2[k][j];    
            }
        }
    }
    return arr;
}

// arr1	arr2	return
// [[1, 4], [3, 2], [4, 1]]	[[3, 3], [3, 3]]	[[15, 15], [15, 15], [15, 15]]
// [[2, 3, 2], [4, 2, 4], [3, 1, 4]]	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]	[[22, 22, 11], [36, 28, 18], [29, 20, 14]]