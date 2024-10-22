
const s ={
    name:"ddadad",
    greet :function(){
        console.log(this.name)
    }
}

let r = s.greet.bind({name:"Siva"});
r(s);