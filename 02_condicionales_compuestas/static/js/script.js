console.long("js conectado...")

/*ejercicio 1*/
function validarEdad(){
    let edad = parseInt(prompt("ingresar edad :"));
    if (edad < 0 && edad >= 130) {
        alert("ingresa una edad valida")
    }
    else if (edad >=18) {
        alert("acceso permitido a la app")
    }
    else if (edad <= 17 && edad > 0){
        alert("necesitas ser mayor de edad")
    }
    else {
        alert("ingresa un valor valido")
    }
}

/*ejercicio 2*/
function filaEspera() {
    let nombre = prompt("ingrese su nombre");
    let usuarios = [];
    if (nombre !== "") {
        usuarios.push(nombre);
        alert(`hola ${usuarios}`);
    } else {
        alert("error: el nombre no puede estar en blanco");
    }
}

/*ejercicio 3*/
function prioridad() {

}