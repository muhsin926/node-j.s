// function setTimeout(
//     callback(),3000
// )


var http= require("http")
var fs=require('fs')
var url= require('url')


http.createServer( (req,res) => {

    var q=url.parse(req.url,true)

    if(q.pathname==='/'){

    fs.readFile('index.html', function(error,data){
        
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()
    })
}
else if(q.pathname==='/signup'){
    console.log(q.query)
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1> welcome '+q.query.fname +' '+q.query.lname+'</h1>')
    res.end()
}

   
}).listen(8080, ()=>console.log('started'))