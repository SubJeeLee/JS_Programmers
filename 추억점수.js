function solution(name, yearning, photo) {
    let result =[];
    let sum =0;
    photo.forEach(arr => {
        for(let i =0;i<arr.length;i++){
            if(name.indexOf(arr[i]) !== -1) sum+= yearning[name.indexOf(arr[i])];
        }
        result.push(sum);
        sum = 0;
    });
    return result;
}
// name	  yearning	   photo	result
// ["may", "kein", "kain", "radi"]	[5, 10, 1, 3]	[["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]	[19, 15, 6]
// ["kali", "mari", "don"]	[11, 1, 55]	[["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]	[67, 0, 55]
// ["may", "kein", "kain", "radi"]	[5, 10, 1, 3]	[["may"],["kein", "deny", "may"], ["kon", "coni"]]	[5, 15, 0]


//다른 풀이
function solution(name, yearning, photo) {
    return photo.map((v)=> v.reduce((a, c)=> a += yearning[name.indexOf(c)] ?? 0, 0))
}