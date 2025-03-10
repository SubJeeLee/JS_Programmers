function solution(phoneBook) {
    const phoneSet = new Set(phoneBook);
    
    for (const number of phoneBook) {
        for (let i = 1; i < number.length; i++) {
            if (phoneSet.has(number.slice(0, i))) {
                return false;
            }
        }
    }
    
    return true;
}

// function solution(phoneBook) {
//     phoneBook.sort();
//     console.log(phoneBook);

//     for (let i = 0; i < phoneBook.length - 1; i++) {
//         if (phoneBook[i + 1].startsWith(phoneBook[i])) {
//             return false;
//         }
//     }
//     return true;
// }

// phone_book	return
// ["119", "97674223", "1195524421"]	false
// ["123","456","789"]	true
// ["12","123","1235","567","88"]	false
