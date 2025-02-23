function solution(schedules, timelogs, startday) {
    let answer = 0;

    for (let i = 0; i < schedules.length; i++) {
        let goal = ((Math.floor(schedules[i] / 100) + Math.floor((schedules[i] % 100 + 10) / 60)) * 100) 
                 + ((schedules[i] % 100 + 10) % 60);
        console.log(goal);

        let start_cnt = startday - 1;
        let chk = 1;

        for (let j = 0; j < timelogs[i].length; j++) {
            let cmp_time = timelogs[i][j];
            if (start_cnt % 7 < 5) {
                if (goal < cmp_time) {
                    chk = 0;
                    break;
                }
            }
            start_cnt++; 
        }
        if (chk) answer++;
    }

    return answer;
}

// schedules	timelogs	startday	result
// [700, 800, 1100]	[[710, 2359, 1050, 700, 650, 631, 659], [800, 801, 805, 800, 759, 810, 809], [1105, 1001, 1002, 600, 1059, 1001, 1100]]	5	3
// [730, 855, 700, 720]	[[710, 700, 650, 735, 700, 931, 912], [908, 901, 805, 815, 800, 831, 835], [705, 701, 702, 705, 710, 710, 711], [707, 731, 859, 913, 934, 931, 905]]	1	2
