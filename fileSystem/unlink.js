var fs= require("fs");
fs.unlink("archivo.txt",function (error){
    if(error){
        throw error;
    }
    else{
        console.log("El archivo fue borrado");
    }
});