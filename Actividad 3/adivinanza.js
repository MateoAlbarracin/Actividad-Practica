function adivinanza(){

    var intentos = document.getElementById("intentos").textContent;
    var ganar = document.getElementById("ganar");
    var pista1 = document.getElementById("pista1");
    var pista2 = document.getElementById("pista2");
    var incorrecto = document.getElementById("incorrecto");
    var perder = document.getElementById("perder");
    var respuesta = document.getElementById("respuesta");

    


    if(intentos > 0){
        if(respuesta.value == 'Milanesa'){
            ganar.style.display = "block"
            incorrecto.style.display = "none"
            pista1.style.display = "none"
            pista2.style.display = "none"
        }
        else{
            intentos = intentos - 1;
            document.getElementById("intentos").innerHTML = intentos
        }
        if(intentos == 2){
            incorrecto.style.display = "block"
            pista1.style.display = "block"
        }
    
        if(intentos == 1){
            incorrecto.style.display = "block"
            pista2.style.display = "block"
        }
    
    
        if(intentos == 0){
            perder.style.display = "block"
            incorrecto.style.display = "none"
            pista1.style.display = "none"
            pista2.style.display = "none"
        }
    }
  
}