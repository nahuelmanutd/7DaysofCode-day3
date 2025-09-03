let preguntaUno = "";
let preguntaDos = "";
let preguntaTres = "";
let arrayTecno = [];

function ifFrontend() {
    preguntaUno = "Front-end";

    console.log(`Pregunta uno: ${preguntaUno}`);
}
function ifBackend() {
    preguntaUno = "Back-end";

    console.log(`Pregunta uno: ${preguntaUno}`);
}

//If front-end:
function reactFront() {
    preguntaDos = "React";

    console.log(`Pregunta dos: ${preguntaDos}`);
}
function vueFront() {
    preguntaDos = "Vue";

    console.log(`Pregunta dos: ${preguntaDos}`);
}

//If back-end:
function cSharpBack() {
    preguntaDos = "C#";

    console.log(`Pregunta dos: ${preguntaDos}`);
}
function javaBack() {
    preguntaDos = "Java";

    console.log(`Pregunta dos: ${preguntaDos}`);
}

//if fullFront/Back.
function fullFront() {
    preguntaTres = "Seguir Front-end";

    console.log(`Pregunta tres: ${preguntaTres}`);
}
function fullBack() {
    preguntaTres = "Seguir Back-end";

    console.log(`Pregunta tres: ${preguntaTres}`);
}

//if fullStack.
function fullStack() {
    preguntaTres = "Ser Full-stack";

    console.log(`Pregunta tres: ${preguntaTres}`);
}

//Array tecnologías.
function seguirTexto() {
    let inputValue = document.getElementById("input").value;

    if(inputValue == "") {
        alert("Inserte un texto válido.");
    } else {
        arrayTecno.push(inputValue);
        document.getElementById("input").value = "";
    }
    console.log(arrayTecno);
}
document.getElementById("input").addEventListener("keydown", function(event) { //Hace que, al presionar enter (enfocando el "input"), este active la función "seguirTexto()"
    if(event.key === "Enter") {
        seguirTexto();
    }
})