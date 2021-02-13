let player :{ 
    club:string,    //we have to assign the type here
    salary:number   //we have to assign the type here
} = {
    club:'real madrid',
    salary:50000
}

console.log(player.club);
console.log(player.salary);

let numbers:number[] = [2,3,4,5,6];
numbers.push(12);
console.log(numbers);