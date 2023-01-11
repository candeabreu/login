const botonEnviar= document.getElementById ("btnEnviar");
const nombreLogin= document.getElementById ("nombre");
const contraseñaLogin = document.getElementById ("contraseña");
const formulario = document.getElementById ("formularioContacto");

function guardarLS2(valores) {
    let datosUsuario = {
        Nombre: nombreLogin.value,
        Contraseña: contraseñaLogin.value,
        
    };

    localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario))

}

botonEnviar.addEventListener("click", () => {

    if (nombreLogin.value == "" ) {
        console.log ("Escribir nombre")

    } else if (contraseñaLogin.value == "" ) {
        console.log ("Escribir contraseña")

    } else {
        console.log ("DATOS ENVIADOS")
    }
    guardarLS2()
})
