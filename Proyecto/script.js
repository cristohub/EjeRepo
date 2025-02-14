function validarFormulario(){
    //nombre

    if (document.getElementById("nombre").value.length == 0){
        alert ("campo vacio");
        document.getElementById("nombre").focus();
        return;
    }

    if (document.getElementById("apellidos").value.length == 0){
        alert ("campo vacio");
        document.getElementById("apellidos").focus();
        return;
    }

    if (document.getElementById("anoNacimiento").value.length == 0){
        alert ("campo vacio");
        document.getElementById("anoNacimiento").focus();
        return;
    }

    if (!validarAnioNacimiento(document.getElementById("anoNacimiento").value)){
        alert ("año invalido");
        return;
    }

}


function validarAnioNacimiento(anio) {
    return /^(19\d{2}|20[0-1]\d|202[0-4])$/.test(anio);
  }