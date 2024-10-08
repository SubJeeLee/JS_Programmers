function solution(strings, n) {
    return strings.sort((a, b) => {
        return a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]);
    });
}

console.log(solution(["sun","bed","car"],1));

// strings	n	return
// ["sun", "bed", "car"]	1	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]