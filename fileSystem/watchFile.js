var fs= require("fs");

var lista=JSON.parse(fs.readFileSync("personas.json","UTF-8"));
console.log(lista);

fs.watchFile("personas.json",function(actual,anterior){
console.log("El archivo cambio");
lista=JSON.parse(fs.readFileSync("personas.json","UTF-8"));
console.log(lista);
});
