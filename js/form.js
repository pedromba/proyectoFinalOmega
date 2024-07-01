let form = document.getElementById("formulario");
let inputs = document.querySelectorAll("#formulario .campos input");
let textarea = document.querySelector("#formulario .campos textarea");
let span = document.querySelectorAll("#formulario .campos span");

const expresiones = {
    nombre: /^[a-zA-Z\s]+$/,
    telefono: /^[0-9-\s]+$/,
    email: /[a-z0-9.-_]+@[a-z.-_]+\.[a-z]+/,
    mensaje: /^[a-zA-Z0-9,.;:-_\s]+$/
}

function validarCampo(expresion, input, campo){
    if (expresion.test(input.value)) {
        document.getElementById(campo).classList.remove("incorrecto");
        document.getElementById(campo).classList.add("correcto");
        document.getElementsByClassName(campo).classList.remove("error");
        document.getElementsByClassName(campo).classList.add("valido");
        
    }else{
        document.getElementById(campo).classList.add("incorrecto");
        document.getElementsByClassName(campo).classList.remove("valido");
        document.getElementsByClassName(campo).classList.add("error");
    }
}

function validacion(e){
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, e.target.id);
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, e.target.id);
            
        break;
        case "email":
            validarCampoEmail(expresiones.email, e.target, e.target.id);
        break;
           validarCampoEmail(expresiones.mensaje, e.target, e.target.id);
    
        default:
            break;
    }(e.target.name);
}

inputs.forEach(function(input){
    input.addEventListener("keyup", validacion);
    input.addEventListener("blur", validacion);
});
form.addEventListener("submit", function(e){
    e.preventDefault();
});