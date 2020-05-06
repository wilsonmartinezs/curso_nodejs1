process.stdout.write("Escriba una lista de numero para sumar.'.' para termnar");
var suma=0;
process.stdin.on("data",function(data){

if(data.toString().trim()=='.'){
    process.exit();
}else{
    suma+=parseInt(data.toString().trim());
}

});
process.on("exit",function(){
    process.stdout.write("La suma total es :"+suma+"\n");
});