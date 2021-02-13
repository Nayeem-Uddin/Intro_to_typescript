// for function we also have to declare the variable type
function sum(num1:number | string , num2:number| string){
    return num1 + num2;
}
const summation = sum(5,5);
const mixed = sum('nayeem','1710')
console.log(summation);




function fullName(firstName:string, lastName:string):string{
    return firstName+''+lastName;
}
const getName = fullName('nayeem','uddin');
console.log(getName);