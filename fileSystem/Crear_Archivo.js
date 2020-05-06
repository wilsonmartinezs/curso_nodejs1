var fs= require("fs");
var texto= "Aprender Node.js Fácilmente";
fs.writeFile("archivo",texto,function(error){
    if(error){
        throw error;
    }else{
        console.log("El archiivo fue creado..!");
    }
});
console.log("Comenzando a escribir el archivo..");