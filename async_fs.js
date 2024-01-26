const fs = require('fs')
fs.readFile ("./hello/world/print.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const read1 = result
    fs.readFile("./hello/world/display.txt","utf-8",(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const read2 = result
        fs.writeFile("./hello/world/new.txt",`here is the result ${read1} and ${read2}`,"utf-8",(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})