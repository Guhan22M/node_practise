const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Welcome to my first website!!!")
    }
    if(req.url === '/about'){
        res.end("It is about page and it seems to be also empty coz i didn't yet connect it with database")
    }
    res.end(`
    <h1>Error</h1>
    <p>This page is not present in this website type correctly </p>
    <a href = "/">back option </a>
    `)
})

server.listen(5000)