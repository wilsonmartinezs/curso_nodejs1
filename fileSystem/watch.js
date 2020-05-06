var fs= require("fs");

var cofig=JSON.parse(fs.readFileSync("personas.json","UTF-8"));
console.log(cofig);
/*
fs.watchFile("personas.json",function(actual,anterior){
console.log("El archivo cambio");
cofig=JSON.parse(fs.readFileSync("personas.json","UTF-8"));
console.log(cofig);
});
*/