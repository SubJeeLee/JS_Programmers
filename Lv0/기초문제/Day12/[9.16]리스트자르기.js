function solution(n, slicer, num_list) {
    const [a,b,c] = slicer;
    switch(n){
        case 1: 
            return num_list.slice(0,b+1);
        case 2:
            return num_list.slice(a,num_list.length);
        case 3:
            return num_list.slice(a,b+1);
        case 4:
            return num_list.slice(a,b+1).filter((_,index) => index % c === 0);
    }
}
console.log(solution(2,[1, 5, 2],[1, 2, 3, 4, 5, 6, 7, 8, 9]));