function solution(survey, choices) {
    let tmp = {
        "R": 0, "T": 0, "C": 0, "F": 0, "J": 0, "M": 0, "A": 0, "N": 0,
    };
    let score = {
        "1": 3,
        "2": 2,
        "3": 1,
        "5": 1,
        "6": 2,
        "7": 3,
    };

    survey.forEach((char, i) => {
        if (choices[i] > 4) {
            tmp[char[1]] += score[choices[i]];
        } else if (choices[i] > 0 && choices[i] < 4) {
            tmp[char[0]] += score[choices[i]];
        }
    });
    
    let result = '';
    const pairs = [["R", "T"], ["C", "F"], ["J", "M"], ["A", "N"]];
    pairs.forEach(([a, b]) => {
        result += (tmp[a] >= tmp[b]) ? a : b;
    });
    
    return result;
}

// survey	choices	result
// ["AN", "CF", "MJ", "RT", "NA"]	[5, 3, 2, 7, 5]	"TCMA"
// ["TR", "RT", "TR"]	[7, 1, 3]	"RCJA"

//다른 풀이
function solution(survey, choices) {
    const MBTI = {};
    const types = ["RT","CF","JM","AN"];

    types.forEach((type) =>
        type.split('').forEach((char) => MBTI[char] = 0)
    )

    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];

        MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    });

    return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
}