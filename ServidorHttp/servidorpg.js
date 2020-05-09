var http = require('http');
var fs= require('fs');
var host ='127.0.0.1';
var puerto ='9000';

var servidor=http.createServer(function(llamado,respuesta){
    console.log(llamado.method +' -->'+llamado.url);
    if(llamado.url=='/'){
        fs.readFile('./index.html','UTF-8',function(error,contenido){
            respuesta.writeHead(200,{'Content-Type':'text/html'});
            respuesta.end(contenido);

        });


    }else{
        respuesta.writeHead(404,{'Content-Type':'text/html'});
        respuesta.end('<h1>Error la página no exite..!</h1>');
    }
    
});
servidor.listen(puerto,host,function(){
console.log('El servidor esta corriendo en el host '+host+' y en el puerto '+puerto);
});