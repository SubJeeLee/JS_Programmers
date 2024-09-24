function solution(arr1, arr2) {
    const Flength = arr1.length;
    const Slength = arr2.length;
    if(Flength !== Slength)
        return Flength > Slength ? 1 : -1;
    else{
        if(arr1.reduce((a,b) => a+b) > arr2.reduce((a,b) => a+b)) return 1;
        else if(arr1.reduce((a,b) => a+b) < arr2.reduce((a,b) => a+b)) return -1;
        else
            return 0;
    }
}


//다른 풀이
const solution = (arr1, arr2) => {
    return arr1.length !== arr2.length ? compare(arr1.length, arr2.length) : compare(arr1, arr2, "reduce");
};

const compare = (a, b, option) => {
    if (option === "reduce") {
        a = a.reduce((acc, cur) => acc + cur);
        b = b.reduce((acc, cur) => acc + cur);
    }
    return a > b ? 1 : a < b ? -1 : 0;
};