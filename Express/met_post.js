var express= require('express');
var bodyParser=require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(llamado,respuesta){
console.log('Se hizo un llamado GET..!');
respuesta.send('Hola desde espress..!');
});

app.get('/frm.html',function(llamado,respuesta){
respuesta.sendFile(__dirname +"/"+"frm.html");

});

app.post('/recibirpost',function(llamado,respuesta){
var nombre= llamado.body.nombre;
var apellido= llamado.body.apellido;
respuesta.send('El nombre '+nombre+' y el apellido '+apellido);

});




app.listen(3000, function(){
    console.log('Aplicación corriendo en el puerto 3000');
});