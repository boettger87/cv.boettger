
function seleccionar(link){
    var opciones = document.querySelector('#links a')
    opciones [0] .className = "";
    opciones [1] .className = "";
    opciones [2] .className = "";
    opciones [3] .className = "";
    link.className = "seleccionado";

    var x = document.getElementById("nav");
    x.className = "";
}

//funcion q muestra el menu responsive
function responsivemenu() {
    var x = document.getElementById ("nav");
    if (x.className===""){
        x.className = "responsive";
    } else {
        x.className = "";
    }
}