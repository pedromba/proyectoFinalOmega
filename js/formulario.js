const form = document.querySelector("form");
let nombre = document.getElementById("nom");
let apellidos = document.querySelector("#apelli");
let edad = document.getElementById("edad");
let nomVacio = document.querySelector("#nomVacio");
let apelliVacio = document.querySelector("#apelliVacio");
let edadVacio = document.querySelector("#edadVacio");
let cbVacio = document.querySelector("#cbVacio");
let cb;

form.addEventListener("submit", function(e){
    e.preventDefault();
    cb = document.querySelectorAll("label input:checked");


    if (nombre.value == "" || nombre.value.length ==0) {
        nomVacio.innerHTML = "Tienes que ingresar un nombre";
        nombre.focus();
        return false;
    }else if (nombre.value.length < 6) {
        nomVacio.innerHTML = "Tu nombre debe tener como minimo 6 caracteres";
        nombre.focus();
        return false;
    }else if (apellidos.value == "" || apellidos.value.length == 0) {
        apelliVacio.innerHTML = "Tienes que ingresar tus apellidos";
        apellidos.focus();
        nomVacio.style.display = "none";
        return false;
    }else if (edad.value == "" || edad.value.length ==0 ) {
        //AQUI ES DONDE TENEIS QUE TRABAJAR
    }else if (cb.length < 3) {
        cbVacio.innerHTML = `Tienes que elegir 3 cursos como minimo, has elegido ${cb.length} cursos`;
        return false
        
    }
    
});