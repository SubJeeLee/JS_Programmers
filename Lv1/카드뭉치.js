function solution(cards1, cards2, goal) {
    let result = [];
    goal.forEach(e => {
        if(e === cards1[0]) cards1.shift();
        else if(e === cards2[0]) cards2.shift();
        else result.push(-1);
    })
    return result.length > 0 ? "No" : "Yes" ;
}

// cards1	cards2	goal	result
// ["i", "drink", "water"]	["want", "to"]	["i", "want", "to", "drink", "water"]	"Yes"
// ["i", "water", "drink"]	["want", "to"]	["i", "want", "to", "drink", "water"]	"No"