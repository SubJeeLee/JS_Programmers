function solution(phone_number) {
    return "*".repeat(phone_number.length-4)+phone_number.slice(-4); 
}

// phone_number	return
// "01033334444"	"*******4444"
// "027778888"	"*****8888"