var Reloj = require("./Reloj");
var segundos=0;

var reloj= new Reloj();

reloj.on("tick-tock",function(){
    segundos+=1;
    if(segundos==5){
        process.exit();
    }
    console.log(segundos);
});
reloj.once("tick-tock",function(){
  
    console.log("Primera vez");
});