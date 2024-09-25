function solution(rank, attendance) {
    const indexedObj = {};

    rank.forEach((value, index) => {
        indexedObj[value] = index;
    });
    let arr = rank.filter((_,i) => attendance[i]);
    let result = arr.sort((a,b) => a-b).slice(0,3).map(e=> indexedObj[e]);
    return result[0]*10000 + result[1]*100 + result[2];
}


//다른 풀이

function solution(rank, attendance) {
    const [a, b, c] = rank
      .map((r, i) => [r, i])
      .filter(([_, i]) => attendance[i])
      .sort(([a], [b]) => a - b);
    return 10000 * a[1] + 100 * b[1] + c[1];
  }