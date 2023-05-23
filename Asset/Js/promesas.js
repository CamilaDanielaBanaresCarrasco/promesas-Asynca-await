//Creo el objeto de tipo Primse , utilizo una funcion Calback que pasa por parametro resolucion y miRechazo
// le agrego un tiempo de espera de 1 segundo
// si mi if es falso funciono
// si no no funciono 




let miPromesa = new Promise(function(miResolucion, miRechazo){ 
setTimeout(function(){
    if(false){
        miResolucion("Funciono :)");
    }else{miRechazo("no funviono :v, por lo que paso por el alerta");  //Este va a saltar 
}


},1000)
})
//al objeto promesa 

miPromesa.then(function(value){
console.log(value)},
 function (value){
    alert(value)
});