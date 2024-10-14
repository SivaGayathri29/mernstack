function add(a){
    var sum=10;
    result= sum+a;
    return function final(b){
        return result+b;
    }
    
}
console.log(add(2)(3));