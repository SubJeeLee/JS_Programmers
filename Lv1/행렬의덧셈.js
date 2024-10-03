function solution(arr1, arr2) {
    const addMatrices = (mat1, mat2) => {
  return mat1.map((row, rowIndex) => 
    row.map((value, colIndex) => value + mat2[rowIndex][colIndex])
  );
};
    
    return addMatrices(arr1,arr2);
}

//다른풀이
function sumMatrix(A,B){
    return A.map((arr1, idx1) => arr1.map((val, idx2) => val+B[idx1][idx2]));
}
