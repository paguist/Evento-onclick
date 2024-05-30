// para cambiar "Login" por "Log out" cuando se hace click
function botonLoggear(boton) {
    if (boton.innerText === "Login") {
        boton.innerText = "Log out";
    } else {
        boton.innerText = "Login";
    }
}

// remover el botón Add Definition
function removerAddBoton(botonAdd) {
    botonAdd.remove();
}

// para mostrar alerta cuando se hace clic en el botón de likes
function alerta() {
    alert ("Ninja tuvo un like!");
}
