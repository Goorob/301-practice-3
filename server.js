 const express = require('express');
 const server = express();
 const PORT = process.env.PORT || 3000 ;

server.get('/' , (request , response)=>{
    response.send('home page');
})

server.get('/data' , (request , response)=>{
let friend = [{"name":"waed"},{"name":"nusaiba"},{"name":"alaa"}]
    response.status(200).json(friend);
})
server.use('*', (request, response) =>{
    response.status(404).send('Not Found');
  });
 server.listen(PORT,()=> console.log(`listening to ${PORT}`))
