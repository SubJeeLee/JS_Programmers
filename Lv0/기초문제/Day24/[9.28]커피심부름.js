function solution(order) {
    let sum =0;
    order.forEach(e=>{
        if(e.includes("americano") || e.includes("anything")) sum+= 4500;
        else sum += 5000;
    })
    return sum;
}

//다른풀이
const solution = (order) => order.reduce((acc, cur) => acc + (cur.includes('latte') ? 5000 : 4500), 0)