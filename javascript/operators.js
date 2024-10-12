
let age = 16;
if (age >= 18) {
    console.log("you are eligible")
} else {
    console.log("Not Eligible")
}

/**
 * If else ladder
 */
if (age > 0 && age < 13) {
    console.log("child")
} else if (age > 13 && age < 20) {
    console.log("teenage")

} else if (age > 21 && age < 40) {
    console.log("Adult")
} else {
    console.log("oldage")
}

/**
 * switch case
 */
var option="add";
switch(option){
    case "add":console.log("It is addition");
    break;
    case "sub":console.log("It is subtraction");
    break;
    case "mul":console.log("It is multiplication");
    break;
    case "div":console.log("It is division");
    break;
    default:console.log("Please enter a valid option")
}

/**
 * for loop
 */

a=[10,20,30,40];
for(let i=0;i<a.length;i++){
    console.log(a[i]);
}


/**
 * while
 */
let i=0;
let a1=[67,78,89,90];
while(i<a1.length){
    console.log(a1[i]);
    i++;
}

/**
 * Do-while
 */


let i1=3;
do{
    console.log(i1++);
}while(i1<=9);

/**
 * break and continue
 */

 let c=[1,2,4,8,5];
 for(let k=0;k<c.length;k++){
    if(c[k]==4){
    console.log("4 is found");
    break;
    }
    else{
        continue;
        console.log("Hi");
    }
 }