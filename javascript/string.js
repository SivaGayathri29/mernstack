const student=`{
    "name":"gayathri",
    "id":1
}`
s=JSON.parse(student)
console.log(s.name)
console.log(`my name is ${s.name}`)