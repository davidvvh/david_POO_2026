console.log("conectado a js...");

/*Ejercicio 1: El Mensaje Desordenado (Push y Pop)
Instrucciones: Crea una función llamada construirFrase. Dentro de ella, define el arreglo let palabras = ["programar", "es"];.
Usa .push() para agregar "increíble" al final.
Usa .push() para agregar "borrar" al final.
Usa .pop() para eliminar "borrar".
Muestra con alert() la frase unida por espacios.*/


/*ejercicio 1*/
function contruirFrases() {
    let palabras = ["programar", " es "];
    palabras.push("increible");
    palabras.push("borrar");
    let eliminada = palabras.pop();
    alert(`El ${palabras.join("")}.`)
    alert(`la palabra eliminada fue "${eliminada}."`)
}


/*ejercicio 2*/
function filaEspera() {
    let alumnos = ["Juan", "María", "Pedro"];
alumnos.unshift("luis");
let salon = [alumnos.shift()];
alert(`Entro ${salon[0]} y la fila ahora es: ${alumnos.join(", ")}.`);
}


/*ejercicio 3*/
function redondearDatos() {
    let datos = [3, "gatos", "negros", "duermen"];
    datos[0] += 2;
    datos.push("placidamente");
    alert(datos.join(" "))
}


/*ejercicio 4*/
function javaScripts() {
    let matriz = [
        [10, 20],
        [30, 40]
    ];
    let suma = matriz[0][0] +matriz[1][1]
    alert(`suma de ${matriz[0][0]} y ${matriz[1][1]} da un total de ${suma}`)
}


/*ejercicio 5*/
function operarIntruso() {
    let datos = [1, [2, [3, 4]]];
    datos[1][1].push (5)
    alert (datos);
}


/*ejercicio 6*/
function accionesTraducidas() {
    let sujetos = ["el programador", "la computadora"]
    let verbos = [["codifica", "analiza"], ["falla", "reinicia"]];
    alert(`${sujetos[0]} ${verbos[0][1]}`)
}


/*ejercicio 7*/
function limpiarDatos() {
    let inventario = ["error", "laptop", "mouse", "teclado", "virus"];
    inventario.shift();
    inventario.pop();
    inventario.unshift("monitor");
    alert(`${inventario.join(", ")}`)
}


/*ejercicio 8*/
function trabajoMatriz() {
    let tablero = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    tablero[0][0] = 1;
    tablero[1][1] = 1;
    tablero[2][2] = 1;
    alert(tablero)
}


/*ejercicio 9*/
function consultaMedica() {
    let pacientes = ["ana", "betto"];
    pacientes.push("carlos", "diana");
    pacientes.shift();
    pacientes.unshift("sonia");
    alert(`quedan ${pacientes.length} y el siguientes es ${pacientes[1]}`)
}


/*ejercicio 10*/
function extraccionProfunda() {
    let caja = [
        ["frutas", "verduras"],
        [["manzana", "pera"], ["tomate", "lechuga"]]
    ];
    alert(`en la canasta hay ${caja [1][0][1]} y ${caja[1][1][1]}`)
}