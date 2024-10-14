const students=(c)=>{
    let student=[{
        name:"gayathri",id:501
    },
    {name:"keerthana",id:501}
];
c(student);
}
students((x)=>{
    console.log(x)
})