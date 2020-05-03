var events = require("events");
var EventEmitter= events.EventEmitter;

var ee= new EventEmitter();

ee.once("cansado",function(data){
    console.log("el jugador se canso por primera vez");
    });
    


ee.on("cansado",function(data){
console.log("El jugador está cansado y es el jugador numero "+data);
});


ee.on("herido",function(data){
    console.log("El jugador está herido ");
    });
    


ee.emit("cansado",10);
ee.emit("cansado",10);
ee.removeAllListeners("cansado");
ee.emit("cansado",10);
ee.emit("herido",10);
