function createMultiplier(arg){
    return function (n){
        return arg*n;

    };
}

let b=createMultiplier(3);
console.log(b(2));