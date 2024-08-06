function solution(my_string, letter) {
    return my_string.replaceAll(letter, "");
}

console.log(solution('BCBdbe','B'));

//주의
//replace() 메서드는 기본적으로 첫 번째로 일치하는 문자열만 대체합니다.
//replaceAll 사용
//혹은 my_string.split(letter).join('') -> split 사용