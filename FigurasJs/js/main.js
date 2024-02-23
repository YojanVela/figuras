function circulo() {
    let figura = document.getElementById("figura")

    figura.classList.toggle("circulo");
}
function rectangulo() {
    let figura = document.querySelector("#figura")

    figura.classList.toggle("rectangulo")
}
function degradado() {
    let figura = document.getElementById("figura")

    figura.classList.toggle("degradado");
}
function gif() {
    let figura = document.querySelector("#figura")

    figura.classList.toggle("gif")
}
function luna() {
    let figura = document.getElementById("figura")

    figura.classList.toggle("luna");
}
function estrella() {
    let figura = document.querySelector("#figura")

    figura.classList.toggle("estrella")
}
function triangulo() {
    let figura = document.getElementById("figura")

    figura.classList.toggle("triangulo")
}
function arriba() {
    let figura = document.getElementById("figura")
    alert("Estas moviendo la figura hacia arriba")

    figura.classList.toggle("top")
}
function abajo() {
    let figura = document.getElementById("figura")
    alert("Estas moviendo la figura hacia arriba")

    figura.classList.toggle("bottom")
}
function right() {
    let figura = document.getElementById("figura")
    alert("Estas moviendo la figura hacia la derecha")

    figura.classList.toggle("right")
}
function left() {
    let figura = document.getElementById("figura")
    alert("Estas moviendo la figura hacia la izquierda")

    figura.classList.toggle("left")
}
function diagonal() {
    let figura = document.getElementById("figura")
    alert("Estas moviendo la figura en diagonal")

    figura.classList.toggle("diagional")
}
function fondo(){
    let body = document.body;
    alert("Estas haciendo cambio de fondo.");

    body.classList.toggle("fondo");

    const h2= document.getElementById("titulo");

    h2.innerText="Fondo";

}
function PanelLateral(){
    let panel = document.getElementById("panel-lateral");

    panel.classList.toggle("active");

    const h2= document.getElementById("titulo");

    h2.innerText="Panel lateral";
}
function PanelSuperior(){
    let panel = document.getElementById("panel-superior");

    panel.classList.toggle("active");

    const h2= document.getElementById("titulo");

    h2.innerText="Panel Superior";
}
function cambiarFondo(){
    let color = prompt("Ingresa el color que desees: ");

    var fondo = document.getElementById("ejemplo");

    fondo.style.backgroundColor = color;

    const h2= document.getElementById("titulo");

    h2.innerText="Cambio de color";
}