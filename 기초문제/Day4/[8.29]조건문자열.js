function solution(ineq, eq, n, m) {
    if(eq === '=') return eval(n+ineq+eq+m) ? 1: 0;
    else return eval(n+ineq+m) ? 1: 0;
}

//다른 풀이
const operations = {
    '>=': (n, m) => n >= m,
    '<=': (n, m) => n <= m,
    '>!': (n, m) => n > m,
    '<!': (n, m) => n < m,
  };
  
  function solution(ineq, eq, n, m) {
    const op = operations[ineq + eq];
    return Number(op(n, m));
  }
  