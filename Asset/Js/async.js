
 function funcionNormal(){
return "hola"
    
}


function a(){
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve("Esto tarda 3 segundos") 
        }, 3000); // retorna la promesa en 3 segundos
    }) 

}



function b(){
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve("Esto tarda 1 segundos")
        }, 1000); // retorna la promesa en 1 segundos
    })

}
//---------------------------------------------------------------------------------
async function llamadaAsync(){
   console.log("iniciado...")

   const resultado1 = await a() //llamo al metodo a() lo guardo en resultado 
   console.log(resultado1) // imprimo resultado1 

   console.log("...Pausa entre promesas ... ")
    

   
   const resultado2 = await b()
   console.log(resultado2);

   console.log("...Fin")
    
}


//Funcion Flecja con Async
const funcAsync = async () => {
    return "Iniciado";
}




llamadaAsync()