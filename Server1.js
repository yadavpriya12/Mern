import http from "http"
import fs from "fs"
import url from "url";

http.createServer((request,response) =>
{
    const parsedUrl = url.parse(request.url,true)
    console.log(parsedUrl)

    if(parsedUrl.pathname == "/add" && request.method == "GET"){
        //let a = parsedUrl.query.a;
        //let b = parsedUrl.query.b; 
        let {a,b} = parsedUrl.query; //{a:20,b:10}
        let result = a*1 + b *1;
        response.write("Addition : "+result);
        response.end();
      }
   }).listen(3000,()=>{
       console.log("Server Started....");
   });
