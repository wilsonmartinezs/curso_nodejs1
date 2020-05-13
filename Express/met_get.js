var express= require('express');
var app = express();



app.get('/', function(llamado,respuesta){
console.log('Se hizo un llamado GET..!');
respuesta.send('Hola desde espress..!');
});

app.get('/frm.html',function(llamado,respuesta){
respuesta.sendFile(__dirname +"/"+"frm.html");

});

app.get('/get',function(llamado, respuesta){
var nombre=llamado.query.nombre;
var apellido=llamado.query.apellido;
respuesta.send('El nombre es '+nombre+' '+ apellido);

});

app.listen(3000, function(){
    console.log('Aplicación corriendo en el puerto 3000');
});