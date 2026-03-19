console.log("js conectado...")

/*ejercicio 1*/

let asistencia = [];
function agregarLista(nombre){
    asistencia.push(nombre);
    return asistencia.join(", ");
}
function registrarAlumno() {
    const container = document.getElementById("container1");
    const result = document.getElementById("result1");
    const input = document.getElementById("input1");
    let nombre = input.value;
    let resultado = agregarLista(nombre);
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}



/*ejercicio 2*/
let pacientes = ["carlos", "maria", "diego"]
function agregarUrgencia(nombre){
    pacientes.unshift(nombre);
    return pacientes.join(", ");
};
function ingresarUrgencia(){
    const container = document.getElementById("container2");
    const result = document.getElementById("result2");
    const input = document.getElementById("input2");
    if (input.value !== "") {
    let nombre = input.value;
    let resultado = agregarUrgencia(nombre);
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
    } else {
        alert("el nombre no puede estar vacio")
    };
};



/*ejercicio 3*/
let entregas = ["pizza", "sushi", "hamburguesa", "ensalada"]
function actualizarPedidos(pedido){
    if(pedido == "despachar") {
        entregas.shift()
    } else if (pedido == "cancelar") {
        entregas.pop()
    } else{
        alert("ingrese un valor valido")
    }
    return `Pedidos pendientes: ${entregas.join(", ")};`
}

function gestionarPedidos(){
    const container = document.getElementById("container3");
    const result = document.getElementById("result3");
    let input = document.getElementById("input3").value;
    let resultado = actualizarPedidos(input);
        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none");
}



/*ejercicio 4*/
let codigosValidos = ["VERANO2026", "PROMO50", "CLIENTEVIP"];
function buscarCodigo(codigo) {
    let mensaje = "codigo invalido o expirado";
    for (let i = 0; i < codigosValidos.length; i++){
        if(codigo == codigosValidos[i]){
            mensaje = "¡exito! codigo aceptado";
            return "¡exito! codigo aceptado";
        } else {
            mensaje = "ingresa un codigo valido";
        }
    }
    return mensaje
}

function verificarCodigo() {
    const container = document.getElementById("container4");
    const result = document.getElementById("result4");
    const input = document.getElementById("input4");
    let codigo = input.value.toUpperCase();
    let resultado = buscarCodigo(codigo);
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}



/*ejercicio 5*/
function calcularCuota(valor, cuota){
    let registroPagos = "";
    for(let i = 1; i<= 3; i++) {
        registroPagos += ` | Cuota ${i} de ${cuota}: ${valor/3}`;
    }
    return registroPagos;
};

function simularCuotas() {
    const producto = document.getElementById("input5_1");
    let valorProducto = parseInt(producto.value);
    const cuotaInput = document.getElementById("input5_2");
    let cuotas = parseInt(cuotaInput.value);
    const result = document.getElementById("result5");
    const container = document.getElementById("container5");
    let resultado = calcularCuotas(valorProducto, cuota)
    result.textContent = registroPagos;
    producto.value = "";
    cuota.value = "";
    container.classList.remove("d-none");
}



/*ejercicio 6*/



/*ejercicio 7*/



/*ejercicio 8*/