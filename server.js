const express = require('express')
var app = express()
port = 3000


var fs = require('fs');
var formidable = require('express-formidable')


app.listen(port, function(){
    console.log(`server is listening to port http://localhost:${port} Ready to accept request`)
})
let post = []

app.use(express.static('public'))


app.use(formidable())

app.post('/create-post', function(req, res){
    const data = req.fields;
    console.log('req.fields data', data);
    post.push(data)
    console.log('req.body', req.body);

   
    
    fs.writeFile(__dirname + '/data/posts.json',JSON.stringify(post), function(error){
        
    } )
        res.send(JSON.stringify(data))   //minichallenge --posting to the frontend and pusing data to the database.

   

})

fs.readFile(__dirname + '/data/posts.json', function (error, file ){
    console.log('this is file', file.toString()); //minichallenge -- read to access the contents
    var parsedFile = JSON.parse(file)
} )






