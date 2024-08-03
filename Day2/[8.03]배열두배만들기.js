function solution(numbers) {
    return numbers.map(function(number) {
        return number * 2; // 각 요소를 2배로 변환
    });
}

let array = [1, 2, 3, 4, 5];
console.log(solution(array));

//forEach는 배열을 수정하는 데 적합하지 않고, 주로 배열을 순회하여 부수 효과(side effect)를 발생시키는 데 사용된다. 
//배열의 각 요소를 변형한 새로운 배열을 원할 때는 map을 사용하는 것이 더 적절하다.