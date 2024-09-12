function solution(a, b, c, d) {
  // {주사위값: 빈도}로 정리
  const dice = [a, b, c, d].reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});
  console.log(dice);

  // 주사위 value 순으로 정렬
  const diceValue = Object.keys(dice).sort((a, b) => dice[b] - dice[a]);

  const first = Number(diceValue[0]);
  const second = Number(diceValue[1]);
  const third = Number(diceValue[2]);

  // 주사위 값이 4개 모두 같을 때
  if (dice[diceValue[0]] === 4) return first * 1111;
  
  // 세 개가 같고 하나가 다를 때
  if (dice[diceValue[0]] === 3) return Math.pow(first * 10 + second, 2);
  
  // 두 개씩 같은 경우
  if (dice[diceValue[0]] === 2 && dice[diceValue[1]] === 2) return (first + second) * Math.abs(first - second);
  
  // 두 개만 같고 나머지가 다른 경우
  if (dice[diceValue[0]] === 2) return second * third;
  
  // 모두 다른 경우 가장 작은 값 리턴
  return Math.min(a, b, c, d);
}

console.log(solution(2,2,2,2));
console.log(solution(4,1,4,4));