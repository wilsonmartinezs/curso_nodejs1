var id=setTimeout(function(){
console.log("Corriendo...");
},1000);
clearTimeout(id);
var suma=0;

var ids=setInterval(function(){
    suma+=1;
    console.log(suma);

if(suma==5)    clearInterval(ids);


    },1000);

  