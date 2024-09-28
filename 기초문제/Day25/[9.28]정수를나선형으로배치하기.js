function solution(n) {
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    let num = 1;
    let row = 0, col = 0;
    let dr = 0, dc = 1; // 시작 방향: 오른쪽
  
    for (let i = 0; i < n * n; i++) {
      result[row][col] = num++;
      const nextRow = row + dr;
      const nextCol = col + dc;
  
      // 다음 위치가 범위를 벗어나거나 이미 채워진 경우 방향 전환
      if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n || result[nextRow][nextCol] !== 0) {
        [dr, dc] = [dc, -dr]; // 방향을 전환 (오른쪽 -> 아래 -> 왼쪽 -> 위)
      }
  
      row += dr;
      col += dc;
    }
  
    return result;
}