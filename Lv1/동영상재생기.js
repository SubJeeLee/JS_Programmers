function solution(video_len, pos, op_start, op_end, commands) {
    function parseTime(time){ //초단위로 바꾸기
        let [min,sec] = time.split(':');
        return Number(sec) + Number(min) * 60;
    }
    
    video_len = parseTime(video_len);
    pos = parseTime(pos);
    op_start = parseTime(op_start);
    op_end = parseTime(op_end);
    
    function openingPass(time){  //오프닝 넘기기
        if(time <= op_end && time >= op_start) return op_end;
        else return time;
    }
    
    pos = openingPass(pos);
    commands.forEach(char => {
        if(char === "prev"){
            pos -= 10;
            if(pos < 0) pos = 0;
        }
        else{
            pos += 10;
            if(pos > video_len) pos = video_len;
        }
        pos = openingPass(pos);
    })
    
    let min = parseInt(pos/60);
    let sec = pos%60;
    
    return `${String(min).length === 1 ? "0"+min : min}:${String(sec).length === 1 ? "0"+sec : sec}`;
}

// video_len	pos	op_start	op_end	commands	result
// "34:33"	"13:00"	"00:55"	"02:55"	["next", "prev"]	"13:00"
// "10:55"	"00:05"	"00:15"	"06:55"	["prev", "next", "next"]	"06:55"
// "07:22"	"04:05"	"00:15"	"04:07"	["next"]	"04:17"