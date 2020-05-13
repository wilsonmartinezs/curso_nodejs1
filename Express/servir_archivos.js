var express= require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(llamado,respuesta){
console.log('Se hizo un llamado GET..!');
respuesta.send('Hola desde espress..!');
});



app.listen(3000, function(){
    console.log('Aplicación corriendo en el puerto 3000');
});