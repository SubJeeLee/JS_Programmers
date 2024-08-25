function solution(cipher, code) {
    return cipher.split('').filter((Key,index) => index % code === code -1).join('');
}
//Key 값을 쓰지 않으므로 (_,index) 로 하고 해도 된다.