interface Player  {
    wife:string,
    isAgree:boolean,
    salary?:number
}
const nayeem:Player = {
    wife : 'kanchi',
    isAgree : true,
    salary : 5000
}
const jamal:Player = {
    wife:'someone',
    isAgree:false,
}

function getBonus (player:Player , friends:string[]){
    return player.salary * 0.1;
}

const poorPlayer4 = {age:50, salary: 10000}
getBonus(nayeem,['sadia','kanchi'])

