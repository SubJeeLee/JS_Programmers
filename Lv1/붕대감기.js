function solution(bandage, health, attacks) {
    let maxHealth = health;
    let [time, perRecovery, bonus] = bandage;
    let bonusT = 0;
    for(let i =1;i<=attacks[attacks.length-1][0];i++){
        let attackTime = attacks.map(e=> e[0]);
        if(attackTime.includes(i)){  //적 공격
            health -= attacks[attackTime.indexOf(i)][1];
            bonusT = 0;   //적 공격으로 인한 연속 초기화
        }
        else{  //회복 중
            bonusT++;
            if(bonusT === time){
                health += (bonus + perRecovery);
                bonusT = 0; //연속성공 이후 초기화
            }
            else{
                health+= perRecovery;
            }
            if(health > maxHealth) health = maxHealth; // 최대체력보다 커지는것은 불가능!
        }
        if(health <= 0) return -1;
    }
    return health;
}

// bandage	health	attacks	result
// [5, 1, 5]	30	[[2, 10], [9, 15], [10, 5], [11, 5]]	5
// [3, 2, 7]	20	[[1, 15], [5, 16], [8, 6]]	-1
// [4, 2, 7]	20	[[1, 15], [5, 16], [8, 6]]	-1
// [1, 1, 1]	5	[[1, 2], [3, 2]]	3