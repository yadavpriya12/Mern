import http from "http"

const server = http.createServer((request,response)=>
{
    response.write("Hello Client");
    response.end();
});
 
server.listen(3000,()=>{
    console.log("Server Started......");
});